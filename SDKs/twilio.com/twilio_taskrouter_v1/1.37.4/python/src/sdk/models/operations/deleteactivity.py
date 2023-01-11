import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class DeleteActivityPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteActivitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteActivityRequest:
    path_params: DeleteActivityPathParams = dataclasses.field()
    security: DeleteActivitySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
