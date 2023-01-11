import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_DOMAIN_CERT_V4_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteDomainCertV4PathParams:
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDomainCertV4Security:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDomainCertV4Request:
    path_params: DeleteDomainCertV4PathParams = dataclasses.field()
    security: DeleteDomainCertV4Security = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteDomainCertV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
