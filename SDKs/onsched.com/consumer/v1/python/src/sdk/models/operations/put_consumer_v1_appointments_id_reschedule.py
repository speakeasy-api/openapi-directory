import dataclasses
from typing import Optional
from ..shared import appointmentreschedulemodel as shared_appointmentreschedulemodel
from ..shared import appointmentviewmodel as shared_appointmentviewmodel


@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReschedulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDRescheduleRequests:
    appointment_reschedule_model: Optional[shared_appointmentreschedulemodel.AppointmentRescheduleModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_reschedule_model1: Optional[shared_appointmentreschedulemodel.AppointmentRescheduleModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_reschedule_model2: Optional[shared_appointmentreschedulemodel.AppointmentRescheduleModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_reschedule_model3: Optional[shared_appointmentreschedulemodel.AppointmentRescheduleModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDRescheduleRequest:
    path_params: PutConsumerV1AppointmentsIDReschedulePathParams = dataclasses.field()
    request: Optional[PutConsumerV1AppointmentsIDRescheduleRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDRescheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_view_model: Optional[shared_appointmentviewmodel.AppointmentViewModel] = dataclasses.field(default=None)
    
