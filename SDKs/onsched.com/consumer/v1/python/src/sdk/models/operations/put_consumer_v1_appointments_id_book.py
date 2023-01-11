import dataclasses
from typing import Optional
from ..shared import appointmentbookmodel as shared_appointmentbookmodel
from ..shared import appointmentviewmodel as shared_appointmentviewmodel


@dataclasses.dataclass
class PutConsumerV1AppointmentsIDBookPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDBookRequests:
    appointment_book_model: Optional[shared_appointmentbookmodel.AppointmentBookModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_book_model1: Optional[shared_appointmentbookmodel.AppointmentBookModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_book_model2: Optional[shared_appointmentbookmodel.AppointmentBookModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_book_model3: Optional[shared_appointmentbookmodel.AppointmentBookModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDBookRequest:
    path_params: PutConsumerV1AppointmentsIDBookPathParams = dataclasses.field()
    request: Optional[PutConsumerV1AppointmentsIDBookRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDBookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_view_model: Optional[shared_appointmentviewmodel.AppointmentViewModel] = dataclasses.field(default=None)
    
