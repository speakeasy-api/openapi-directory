import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FrequencyCapTimeUnitTypeEnum(str, Enum):
    TIME_UNIT_TYPE_UNSPECIFIED = "TIME_UNIT_TYPE_UNSPECIFIED"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    LIFETIME = "LIFETIME"
    POD = "POD"
    STREAM = "STREAM"


@dataclass_json
@dataclasses.dataclass
class FrequencyCap:
    r"""FrequencyCap
    Frequency cap.
    """
    
    max_impressions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    num_time_units: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numTimeUnits') }})
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitType') }})
    
