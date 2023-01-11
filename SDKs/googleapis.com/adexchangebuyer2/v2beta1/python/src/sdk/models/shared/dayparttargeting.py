import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daypart as shared_daypart

class DayPartTargetingTimeZoneTypeEnum(str, Enum):
    TIME_ZONE_SOURCE_UNSPECIFIED = "TIME_ZONE_SOURCE_UNSPECIFIED"
    PUBLISHER = "PUBLISHER"
    USER = "USER"


@dataclass_json
@dataclasses.dataclass
class DayPartTargeting:
    r"""DayPartTargeting
    Specifies the day part targeting criteria.
    """
    
    day_parts: Optional[list[shared_daypart.DayPart]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayParts') }})
    time_zone_type: Optional[DayPartTargetingTimeZoneTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneType') }})
    
