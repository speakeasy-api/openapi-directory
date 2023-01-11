import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task as shared_taskrouter_v1_workspace_task


LIST_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListTaskPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTaskQueryParams:
    assignment_status: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AssignmentStatus', 'style': 'form', 'explode': True }})
    evaluate_task_attributes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EvaluateTaskAttributes', 'style': 'form', 'explode': True }})
    has_addons: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HasAddons', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ordering', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Priority', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    workflow_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'WorkflowName', 'style': 'form', 'explode': True }})
    workflow_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'WorkflowSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTaskListTaskResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTaskListTaskResponse:
    meta: Optional[ListTaskListTaskResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    tasks: Optional[list[shared_taskrouter_v1_workspace_task.TaskrouterV1WorkspaceTask]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    

@dataclasses.dataclass
class ListTaskRequest:
    path_params: ListTaskPathParams = dataclasses.field()
    query_params: ListTaskQueryParams = dataclasses.field()
    security: ListTaskSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_task_response: Optional[ListTaskListTaskResponse] = dataclasses.field(default=None)
    
