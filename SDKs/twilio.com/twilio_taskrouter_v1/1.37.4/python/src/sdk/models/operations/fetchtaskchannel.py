import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_channel as shared_taskrouter_v1_workspace_task_channel


FETCH_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchTaskChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskChannelRequest:
    path_params: FetchTaskChannelPathParams = dataclasses.field()
    security: FetchTaskChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_channel: Optional[shared_taskrouter_v1_workspace_task_channel.TaskrouterV1WorkspaceTaskChannel] = dataclasses.field(default=None)
    
