import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_queue as shared_taskrouter_v1_workspace_task_queue


FETCH_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchTaskQueuePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskQueueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskQueueRequest:
    path_params: FetchTaskQueuePathParams = dataclasses.field()
    security: FetchTaskQueueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_queue: Optional[shared_taskrouter_v1_workspace_task_queue.TaskrouterV1WorkspaceTaskQueue] = dataclasses.field(default=None)
    
