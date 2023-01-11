import dataclasses
from typing import Optional
from ..shared import bookingfieldlistviewmodel as shared_bookingfieldlistviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersBookingfieldsQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersBookingfieldsRequest:
    query_params: GetConsumerV1CustomersBookingfieldsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersBookingfieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_field_list_view_model: Optional[shared_bookingfieldlistviewmodel.BookingFieldListViewModel] = dataclasses.field(default=None)
    
