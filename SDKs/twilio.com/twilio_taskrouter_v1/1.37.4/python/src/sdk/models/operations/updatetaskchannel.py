import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_channel as shared_taskrouter_v1_workspace_task_channel


UPDATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateTaskChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskChannelUpdateTaskChannelRequest:
    channel_optimized_routing: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChannelOptimizedRouting' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateTaskChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTaskChannelRequest:
    path_params: UpdateTaskChannelPathParams = dataclasses.field()
    security: UpdateTaskChannelSecurity = dataclasses.field()
    request: Optional[UpdateTaskChannelUpdateTaskChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTaskChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_channel: Optional[shared_taskrouter_v1_workspace_task_channel.TaskrouterV1WorkspaceTaskChannel] = dataclasses.field(default=None)
    
