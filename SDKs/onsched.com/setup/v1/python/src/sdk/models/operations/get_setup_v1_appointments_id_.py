import dataclasses
from typing import Optional
from ..shared import appointmentviewmodel as shared_appointmentviewmodel


@dataclasses.dataclass
class GetSetupV1AppointmentsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1AppointmentsIDRequest:
    path_params: GetSetupV1AppointmentsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1AppointmentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_view_model: Optional[shared_appointmentviewmodel.AppointmentViewModel] = dataclasses.field(default=None)
    
