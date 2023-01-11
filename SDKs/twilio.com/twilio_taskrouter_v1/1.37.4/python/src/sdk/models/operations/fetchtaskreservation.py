import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task_task_reservation as shared_taskrouter_v1_workspace_task_task_reservation


FETCH_TASK_RESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class FetchTaskReservationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskReservationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskReservationRequest:
    path_params: FetchTaskReservationPathParams = dataclasses.field()
    security: FetchTaskReservationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskReservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task_task_reservation: Optional[shared_taskrouter_v1_workspace_task_task_reservation.TaskrouterV1WorkspaceTaskTaskReservation] = dataclasses.field(default=None)
    
