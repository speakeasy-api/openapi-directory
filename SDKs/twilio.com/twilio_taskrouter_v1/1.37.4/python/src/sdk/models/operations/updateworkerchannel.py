import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_channel as shared_taskrouter_v1_workspace_worker_worker_channel


UPDATE_WORKER_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class UpdateWorkerChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    worker_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkerChannelUpdateWorkerChannelRequest:
    available: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Available' }})
    capacity: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Capacity' }})
    

@dataclasses.dataclass
class UpdateWorkerChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWorkerChannelRequest:
    path_params: UpdateWorkerChannelPathParams = dataclasses.field()
    security: UpdateWorkerChannelSecurity = dataclasses.field()
    request: Optional[UpdateWorkerChannelUpdateWorkerChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWorkerChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker_worker_channel: Optional[shared_taskrouter_v1_workspace_worker_worker_channel.TaskrouterV1WorkspaceWorkerWorkerChannel] = dataclasses.field(default=None)
    
