import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_activity as shared_taskrouter_v1_workspace_activity


FETCH_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchActivityPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchActivitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchActivityRequest:
    path_params: FetchActivityPathParams = dataclasses.field()
    security: FetchActivitySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_activity: Optional[shared_taskrouter_v1_workspace_activity.TaskrouterV1WorkspaceActivity] = dataclasses.field(default=None)
    
