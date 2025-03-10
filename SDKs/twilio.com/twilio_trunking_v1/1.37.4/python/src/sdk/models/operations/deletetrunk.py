import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class DeleteTrunkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTrunkRequest:
    path_params: DeleteTrunkPathParams = dataclasses.field()
    security: DeleteTrunkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
