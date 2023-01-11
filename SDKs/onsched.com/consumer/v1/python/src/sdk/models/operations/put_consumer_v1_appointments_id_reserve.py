import dataclasses
from typing import Optional
from ..shared import appointmentreservemodel as shared_appointmentreservemodel


@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReservePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReserveQueryParams:
    send_notifications: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReserveRequests:
    appointment_reserve_model: Optional[shared_appointmentreservemodel.AppointmentReserveModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_reserve_model1: Optional[shared_appointmentreservemodel.AppointmentReserveModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_reserve_model2: Optional[shared_appointmentreservemodel.AppointmentReserveModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_reserve_model3: Optional[shared_appointmentreservemodel.AppointmentReserveModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReserveRequest:
    path_params: PutConsumerV1AppointmentsIDReservePathParams = dataclasses.field()
    query_params: PutConsumerV1AppointmentsIDReserveQueryParams = dataclasses.field()
    request: Optional[PutConsumerV1AppointmentsIDReserveRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDReserveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
