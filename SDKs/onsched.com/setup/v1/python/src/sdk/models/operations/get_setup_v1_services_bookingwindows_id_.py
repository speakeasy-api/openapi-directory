import dataclasses
from typing import Optional
from ..shared import bookingwindowviewmodel as shared_bookingwindowviewmodel


@dataclasses.dataclass
class GetSetupV1ServicesBookingwindowsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesBookingwindowsIDRequest:
    path_params: GetSetupV1ServicesBookingwindowsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_window_view_model: Optional[shared_bookingwindowviewmodel.BookingWindowViewModel] = dataclasses.field(default=None)
    
