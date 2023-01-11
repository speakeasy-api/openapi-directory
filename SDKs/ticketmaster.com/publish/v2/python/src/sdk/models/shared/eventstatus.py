import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EventStatusCodeEnum(str, Enum):
    ONSALE = "onsale"
    OFFSALE = "offsale"
    CANCELED = "canceled"
    POSTPONED = "postponed"
    RESCHEDULED = "rescheduled"


@dataclass_json
@dataclasses.dataclass
class EventStatus:
    r"""EventStatus
    Event's Status
    """
    
    code: Optional[EventStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
