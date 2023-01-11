import dataclasses
from typing import Optional
from ..shared import appointmentinitialmodel as shared_appointmentinitialmodel
from ..shared import appointmentinitialviewmodel as shared_appointmentinitialviewmodel


@dataclasses.dataclass
class PostConsumerV1AppointmentsQueryParams:
    complete_booking: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completeBooking', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConsumerV1AppointmentsRequests:
    appointment_initial_model: Optional[shared_appointmentinitialmodel.AppointmentInitialModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_initial_model1: Optional[shared_appointmentinitialmodel.AppointmentInitialModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_initial_model2: Optional[shared_appointmentinitialmodel.AppointmentInitialModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_initial_model3: Optional[shared_appointmentinitialmodel.AppointmentInitialModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostConsumerV1AppointmentsRequest:
    query_params: PostConsumerV1AppointmentsQueryParams = dataclasses.field()
    request: Optional[PostConsumerV1AppointmentsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostConsumerV1AppointmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_initial_view_model: Optional[shared_appointmentinitialviewmodel.AppointmentInitialViewModel] = dataclasses.field(default=None)
    
