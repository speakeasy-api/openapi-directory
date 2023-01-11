import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace as shared_taskrouter_v1_workspace


FETCH_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchWorkspacePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWorkspaceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWorkspaceRequest:
    path_params: FetchWorkspacePathParams = dataclasses.field()
    security: FetchWorkspaceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace: Optional[shared_taskrouter_v1_workspace.TaskrouterV1Workspace] = dataclasses.field(default=None)
    
