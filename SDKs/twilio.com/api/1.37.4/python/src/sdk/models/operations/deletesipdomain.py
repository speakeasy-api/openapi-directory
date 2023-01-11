import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteSipDomainPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSipDomainSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSipDomainRequest:
    path_params: DeleteSipDomainPathParams = dataclasses.field()
    security: DeleteSipDomainSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSipDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
