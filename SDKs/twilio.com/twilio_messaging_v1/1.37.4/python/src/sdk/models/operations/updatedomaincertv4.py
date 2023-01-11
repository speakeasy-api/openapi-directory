import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_domain_cert_v4 as shared_messaging_v1_domain_cert_v4


UPDATE_DOMAIN_CERT_V4_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class UpdateDomainCertV4PathParams:
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDomainCertV4UpdateDomainCertV4Request:
    tls_cert: str = dataclasses.field(metadata={'form': { 'field_name': 'TlsCert' }})
    

@dataclasses.dataclass
class UpdateDomainCertV4Security:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDomainCertV4Request:
    path_params: UpdateDomainCertV4PathParams = dataclasses.field()
    security: UpdateDomainCertV4Security = dataclasses.field()
    request: Optional[UpdateDomainCertV4UpdateDomainCertV4Request] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDomainCertV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_domain_cert_v4: Optional[shared_messaging_v1_domain_cert_v4.MessagingV1DomainCertV4] = dataclasses.field(default=None)
    
