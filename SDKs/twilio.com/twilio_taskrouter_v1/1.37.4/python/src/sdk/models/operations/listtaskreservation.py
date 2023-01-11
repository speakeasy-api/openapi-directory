import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import task_reservation_enum_status_enum as shared_task_reservation_enum_status_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_task_reservation as shared_taskrouter_v1_workspace_task_task_reservation


LIST_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListTaskReservationPathParams:
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTaskReservationQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared_task_reservation_enum_status_enum.TaskReservationEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    worker_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'WorkerSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTaskReservationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTaskReservationListTaskReservationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTaskReservationListTaskReservationResponse:
    meta: Optional[ListTaskReservationListTaskReservationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    reservations: Optional[list[shared_taskrouter_v1_workspace_task_task_reservation.TaskrouterV1WorkspaceTaskTaskReservation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    

@dataclasses.dataclass
class ListTaskReservationRequest:
    path_params: ListTaskReservationPathParams = dataclasses.field()
    query_params: ListTaskReservationQueryParams = dataclasses.field()
    security: ListTaskReservationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTaskReservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_task_reservation_response: Optional[ListTaskReservationListTaskReservationResponse] = dataclasses.field(default=None)
    
