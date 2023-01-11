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
    Message contains details about publisher-set frequency caps of the delivery.
    """
    
    max_impressions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitType') }})
    time_units_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitsCount') }})
    
