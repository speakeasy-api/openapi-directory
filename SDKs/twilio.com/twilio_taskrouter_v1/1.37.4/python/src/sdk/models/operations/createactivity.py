import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_activity as shared_taskrouter_v1_workspace_activity


CREATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateActivityPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateActivityCreateActivityRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    available: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Available' }})
    

@dataclasses.dataclass
class CreateActivitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateActivityRequest:
    path_params: CreateActivityPathParams = dataclasses.field()
    security: CreateActivitySecurity = dataclasses.field()
    request: Optional[CreateActivityCreateActivityRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_activity: Optional[shared_taskrouter_v1_workspace_activity.TaskrouterV1WorkspaceActivity] = dataclasses.field(default=None)
    
