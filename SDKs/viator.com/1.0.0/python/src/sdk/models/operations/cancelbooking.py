import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancellationrequest as shared_cancellationrequest
from ..shared import four_hundred_and_one_unauthorized as shared_four_hundred_and_one_unauthorized
from ..shared import four_hundred_and_six_not_acceptable as shared_four_hundred_and_six_not_acceptable
from ..shared import five_hundred_internal_server_error as shared_five_hundred_internal_server_error
from ..shared import five_hundred_and_three_service_unavailable as shared_five_hundred_and_three_service_unavailable
from ..shared import cancelbookingresponse as shared_cancelbookingresponse


CANCEL_BOOKING_SERVERS = [
	"https://api.sandbox.viator.com/partner",
]


@dataclasses.dataclass
class CancelBookingPathParams:
    booking_reference: str = dataclasses.field(metadata={'path_param': { 'field_name': 'booking-reference', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelBookingHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class CancelBooking400ApplicationJSONCodeEnum(str, Enum):
    BAD_REQUEST = "BAD_REQUEST"

class CancelBooking400ApplicationJSONMessageEnum(str, Enum):
    MISSING_CANCELLATION_REASON = "Missing cancellation reason"


@dataclass_json
@dataclasses.dataclass
class CancelBooking400ApplicationJSON:
    code: Optional[CancelBooking400ApplicationJSONCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[CancelBooking400ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
class CancelBooking404ApplicationJSONCodeEnum(str, Enum):
    NOT_FOUND = "NOT_FOUND"

class CancelBooking404ApplicationJSONMessageEnum(str, Enum):
    BOOKING_NOT_FOUND = "Booking not found"


@dataclass_json
@dataclasses.dataclass
class CancelBooking404ApplicationJSON:
    code: Optional[CancelBooking404ApplicationJSONCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[CancelBooking404ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclasses.dataclass
class CancelBookingRequest:
    headers: CancelBookingHeaders = dataclasses.field()
    path_params: CancelBookingPathParams = dataclasses.field()
    request: Optional[shared_cancellationrequest.CancellationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CancelBookingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_unauthorized: Optional[shared_four_hundred_and_one_unauthorized.FourHundredAndOneUnauthorized] = dataclasses.field(default=None)
    four_hundred_and_six_not_acceptable: Optional[shared_four_hundred_and_six_not_acceptable.FourHundredAndSixNotAcceptable] = dataclasses.field(default=None)
    five_hundred_internal_server_error: Optional[shared_five_hundred_internal_server_error.FiveHundredInternalServerError] = dataclasses.field(default=None)
    five_hundred_and_three_service_unavailable: Optional[shared_five_hundred_and_three_service_unavailable.FiveHundredAndThreeServiceUnavailable] = dataclasses.field(default=None)
    cancel_booking_response: Optional[shared_cancelbookingresponse.CancelBookingResponse] = dataclasses.field(default=None)
    cancel_booking_400_application_json_object: Optional[CancelBooking400ApplicationJSON] = dataclasses.field(default=None)
    cancel_booking_404_application_json_object: Optional[CancelBooking404ApplicationJSON] = dataclasses.field(default=None)
    
