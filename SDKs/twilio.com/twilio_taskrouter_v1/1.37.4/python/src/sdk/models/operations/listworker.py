import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker as shared_taskrouter_v1_workspace_worker


LIST_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListWorkerPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkerQueryParams:
    activity_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ActivityName', 'style': 'form', 'explode': True }})
    activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ActivitySid', 'style': 'form', 'explode': True }})
    available: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Available', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ordering', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    target_workers_expression: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TargetWorkersExpression', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWorkerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerListWorkerResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerListWorkerResponse:
    meta: Optional[ListWorkerListWorkerResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    workers: Optional[list[shared_taskrouter_v1_workspace_worker.TaskrouterV1WorkspaceWorker]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    

@dataclasses.dataclass
class ListWorkerRequest:
    path_params: ListWorkerPathParams = dataclasses.field()
    query_params: ListWorkerQueryParams = dataclasses.field()
    security: ListWorkerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListWorkerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_worker_response: Optional[ListWorkerListWorkerResponse] = dataclasses.field(default=None)
    
