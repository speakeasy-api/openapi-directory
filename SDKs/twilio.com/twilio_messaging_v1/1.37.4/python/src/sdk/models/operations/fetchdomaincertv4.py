import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_domain_cert_v4 as shared_messaging_v1_domain_cert_v4


FETCH_DOMAIN_CERT_V4_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchDomainCertV4PathParams:
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDomainCertV4Security:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDomainCertV4Request:
    path_params: FetchDomainCertV4PathParams = dataclasses.field()
    security: FetchDomainCertV4Security = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDomainCertV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_domain_cert_v4: Optional[shared_messaging_v1_domain_cert_v4.MessagingV1DomainCertV4] = dataclasses.field(default=None)
    
