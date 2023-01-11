import dataclasses
from typing import Optional
from enum import Enum

class EventStatusCodeEnum(str, Enum):
    ONSALE = "onsale"
    OFFSALE = "offsale"
    CANCELED = "canceled"
    POSTPONED = "postponed"
    RESCHEDULED = "rescheduled"


@dataclasses.dataclass
class EventStatus:
    r"""EventStatus
    Event's Status
    """
    
    code: Optional[EventStatusCodeEnum] = dataclasses.field(default=None)
    
