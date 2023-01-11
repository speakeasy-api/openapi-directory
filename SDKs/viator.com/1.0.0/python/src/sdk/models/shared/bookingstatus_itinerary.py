import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BookingStatusItineraryLevelEnum(str, Enum):
    ITEM = "ITEM"
    ITINERARY = "ITINERARY"

class BookingStatusItineraryTypeEnum(str, Enum):
    WAITING = "WAITING"
    CONFIRMED = "CONFIRMED"
    PENDING = "PENDING"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    AMENDED = "AMENDED"
    PENDING_AMEND = "PENDING_AMEND"


@dataclass_json
@dataclasses.dataclass
class BookingStatusItinerary:
    r"""BookingStatusItinerary
    **object** containing itinerary booking status information
    """
    
    amended: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amended') }})
    cancelled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelled') }})
    confirmed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    failed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    level: Optional[BookingStatusItineraryLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    pending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[BookingStatusItineraryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
