import dataclasses
from typing import Optional
from ..shared import four_hundred_and_one_unauthorized as shared_four_hundred_and_one_unauthorized
from ..shared import four_hundred_and_six_not_acceptable as shared_four_hundred_and_six_not_acceptable
from ..shared import five_hundred_internal_server_error as shared_five_hundred_internal_server_error
from ..shared import five_hundred_and_three_service_unavailable as shared_five_hundred_and_three_service_unavailable
from ..shared import cancelbookingquoteresponse as shared_cancelbookingquoteresponse


CANCEL_BOOKING_QUOTE_SERVERS = [
	"https://api.sandbox.viator.com/partner",
]


@dataclasses.dataclass
class CancelBookingQuotePathParams:
    booking_reference: str = dataclasses.field(metadata={'path_param': { 'field_name': 'booking-reference', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelBookingQuoteRequest:
    path_params: CancelBookingQuotePathParams = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CancelBookingQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_unauthorized: Optional[shared_four_hundred_and_one_unauthorized.FourHundredAndOneUnauthorized] = dataclasses.field(default=None)
    four_hundred_and_six_not_acceptable: Optional[shared_four_hundred_and_six_not_acceptable.FourHundredAndSixNotAcceptable] = dataclasses.field(default=None)
    five_hundred_internal_server_error: Optional[shared_five_hundred_internal_server_error.FiveHundredInternalServerError] = dataclasses.field(default=None)
    five_hundred_and_three_service_unavailable: Optional[shared_five_hundred_and_three_service_unavailable.FiveHundredAndThreeServiceUnavailable] = dataclasses.field(default=None)
    cancel_booking_quote_response: Optional[shared_cancelbookingquoteresponse.CancelBookingQuoteResponse] = dataclasses.field(default=None)
    
