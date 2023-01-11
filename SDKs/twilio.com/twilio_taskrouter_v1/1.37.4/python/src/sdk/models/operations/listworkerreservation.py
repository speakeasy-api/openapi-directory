import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worker_reservation_enum_status_enum as shared_worker_reservation_enum_status_enum
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker_worker_reservation as shared_taskrouter_v1_workspace_worker_worker_reservation


LIST_WORKER_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class ListWorkerReservationPathParams:
    worker_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkerReservationQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    reservation_status: Optional[shared_worker_reservation_enum_status_enum.WorkerReservationEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservationStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWorkerReservationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerReservationListWorkerReservationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWorkerReservationListWorkerReservationResponse:
    meta: Optional[ListWorkerReservationListWorkerReservationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    reservations: Optional[list[shared_taskrouter_v1_workspace_worker_worker_reservation.TaskrouterV1WorkspaceWorkerWorkerReservation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    

@dataclasses.dataclass
class ListWorkerReservationRequest:
    path_params: ListWorkerReservationPathParams = dataclasses.field()
    query_params: ListWorkerReservationQueryParams = dataclasses.field()
    security: ListWorkerReservationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListWorkerReservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_worker_reservation_response: Optional[ListWorkerReservationListWorkerReservationResponse] = dataclasses.field(default=None)
    
