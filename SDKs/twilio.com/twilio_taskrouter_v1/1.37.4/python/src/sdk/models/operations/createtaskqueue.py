import dataclasses
from typing import Optional
from enum import Enum
from ..shared import task_queue_enum_task_order_enum as shared_task_queue_enum_task_order_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_queue as shared_taskrouter_v1_workspace_task_queue


CREATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateTaskQueuePathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTaskQueueCreateTaskQueueRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    assignment_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AssignmentActivitySid' }})
    max_reserved_workers: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxReservedWorkers' }})
    reservation_activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReservationActivitySid' }})
    target_workers: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TargetWorkers' }})
    task_order: Optional[shared_task_queue_enum_task_order_enum.TaskQueueEnumTaskOrderEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskOrder' }})
    

@dataclasses.dataclass
class CreateTaskQueueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTaskQueueRequest:
    path_params: CreateTaskQueuePathParams = dataclasses.field()
    security: CreateTaskQueueSecurity = dataclasses.field()
    request: Optional[CreateTaskQueueCreateTaskQueueRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTaskQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_queue: Optional[shared_taskrouter_v1_workspace_task_queue.TaskrouterV1WorkspaceTaskQueue] = dataclasses.field(default=None)
    
