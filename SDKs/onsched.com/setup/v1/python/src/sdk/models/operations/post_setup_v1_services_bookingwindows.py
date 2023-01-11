import dataclasses
from typing import Optional
from ..shared import bookingwindowinputmodel as shared_bookingwindowinputmodel
from ..shared import bookingwindowviewmodel as shared_bookingwindowviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesBookingwindowsRequests:
    booking_window_input_model: Optional[shared_bookingwindowinputmodel.BookingWindowInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    booking_window_input_model1: Optional[shared_bookingwindowinputmodel.BookingWindowInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    booking_window_input_model2: Optional[shared_bookingwindowinputmodel.BookingWindowInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    booking_window_input_model3: Optional[shared_bookingwindowinputmodel.BookingWindowInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesBookingwindowsRequest:
    request: Optional[PostSetupV1ServicesBookingwindowsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesBookingwindowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_window_view_model: Optional[shared_bookingwindowviewmodel.BookingWindowViewModel] = dataclasses.field(default=None)
    
