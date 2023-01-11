import dataclasses
from typing import Optional
from ..shared import bookingwindowviewmodel as shared_bookingwindowviewmodel


@dataclasses.dataclass
class GetSetupV1ServicesIDBookingwindowsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBookingwindowsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBookingwindowsRequest:
    path_params: GetSetupV1ServicesIDBookingwindowsPathParams = dataclasses.field()
    query_params: GetSetupV1ServicesIDBookingwindowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesIDBookingwindowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_window_view_model: Optional[shared_bookingwindowviewmodel.BookingWindowViewModel] = dataclasses.field(default=None)
    
