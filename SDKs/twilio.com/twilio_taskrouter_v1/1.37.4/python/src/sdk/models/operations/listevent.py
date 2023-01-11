import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_event as shared_taskrouter_v1_workspace_event


LIST_EVENT_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListEventPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListEventQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EventType', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservationSid', 'style': 'form', 'explode': True }})
    sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Sid', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    task_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TaskSid', 'style': 'form', 'explode': True }})
    worker_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'WorkerSid', 'style': 'form', 'explode': True }})
    workflow_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'WorkflowSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListEventListEventResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEventListEventResponse:
    events: Optional[list[shared_taskrouter_v1_workspace_event.TaskrouterV1WorkspaceEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    meta: Optional[ListEventListEventResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListEventRequest:
    path_params: ListEventPathParams = dataclasses.field()
    query_params: ListEventQueryParams = dataclasses.field()
    security: ListEventSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_event_response: Optional[ListEventListEventResponse] = dataclasses.field(default=None)
    
