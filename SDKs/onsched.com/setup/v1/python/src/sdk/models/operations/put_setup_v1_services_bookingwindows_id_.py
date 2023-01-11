import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import bookingwindowupdatemodel as shared_bookingwindowupdatemodel
from ..shared import bookingwindowviewmodel as shared_bookingwindowviewmodel


@dataclasses.dataclass
class PutSetupV1ServicesBookingwindowsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ServicesBookingwindowsIDRequests:
    booking_window_update_model: Optional[shared_bookingwindowupdatemodel.BookingWindowUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    booking_window_update_model1: Optional[shared_bookingwindowupdatemodel.BookingWindowUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    booking_window_update_model2: Optional[shared_bookingwindowupdatemodel.BookingWindowUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    booking_window_update_model3: Optional[shared_bookingwindowupdatemodel.BookingWindowUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ServicesBookingwindowsIDRequest:
    path_params: PutSetupV1ServicesBookingwindowsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ServicesBookingwindowsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_window_view_model: Optional[shared_bookingwindowviewmodel.BookingWindowViewModel] = dataclasses.field(default=None)
    
