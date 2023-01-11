import dataclasses
from typing import Optional
from ..shared import appointmentviewmodel as shared_appointmentviewmodel


@dataclasses.dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDRequest:
    path_params: PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_view_model: Optional[shared_appointmentviewmodel.AppointmentViewModel] = dataclasses.field(default=None)
    
