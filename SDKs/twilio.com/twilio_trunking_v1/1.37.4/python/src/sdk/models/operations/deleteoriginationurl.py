import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class DeleteOriginationURLPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOriginationURLSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteOriginationURLRequest:
    path_params: DeleteOriginationURLPathParams = dataclasses.field()
    security: DeleteOriginationURLSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteOriginationURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
