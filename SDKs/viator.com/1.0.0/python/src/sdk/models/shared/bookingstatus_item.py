import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BookingStatusItemLevelEnum(str, Enum):
    ITEM = "ITEM"
    ITINERARY = "ITINERARY"

class BookingStatusItemTypeEnum(str, Enum):
    WAITING = "WAITING"
    CONFIRMED = "CONFIRMED"
    UNAVAILABLE = "UNAVAILABLE"
    PENDING = "PENDING"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"
    AMENDED = "AMENDED"
    PENDING_AMEND = "PENDING_AMEND"
    REJECTED = "REJECTED"
    ON_HOLD = "ON_HOLD"


@dataclass_json
@dataclasses.dataclass
class BookingStatusItem:
    r"""BookingStatusItem
    **object** containing item booking status information
    """
    
    amended: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amended') }})
    cancelled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelled') }})
    confirmed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    failed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    level: Optional[BookingStatusItemLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    pending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[BookingStatusItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
