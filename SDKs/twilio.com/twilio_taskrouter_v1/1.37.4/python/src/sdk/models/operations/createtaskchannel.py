import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_channel as shared_taskrouter_v1_workspace_task_channel


CREATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateTaskChannelPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTaskChannelCreateTaskChannelRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    channel_optimized_routing: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChannelOptimizedRouting' }})
    

@dataclasses.dataclass
class CreateTaskChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTaskChannelRequest:
    path_params: CreateTaskChannelPathParams = dataclasses.field()
    security: CreateTaskChannelSecurity = dataclasses.field()
    request: Optional[CreateTaskChannelCreateTaskChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTaskChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_channel: Optional[shared_taskrouter_v1_workspace_task_channel.TaskrouterV1WorkspaceTaskChannel] = dataclasses.field(default=None)
    
