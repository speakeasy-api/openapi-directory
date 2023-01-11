import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import refunddetails as shared_refunddetails

class CancelBookingQuoteResponseStatusEnum(str, Enum):
    CANCELLABLE = "CANCELLABLE"
    CANCELLED = "CANCELLED"
    NOT_CANCELLABLE = "NOT_CANCELLABLE"


@dataclass_json
@dataclasses.dataclass
class CancelBookingQuoteResponse:
    booking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingId') }})
    refund_details: Optional[shared_refunddetails.RefundDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundDetails') }})
    status: Optional[CancelBookingQuoteResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
