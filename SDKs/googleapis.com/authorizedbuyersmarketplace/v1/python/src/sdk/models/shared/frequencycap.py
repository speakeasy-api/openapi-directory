"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class FrequencyCapTimeUnitTypeEnum(str, Enum):
    r"""The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped."""
    TIME_UNIT_TYPE_UNSPECIFIED = 'TIME_UNIT_TYPE_UNSPECIFIED'
    MINUTE = 'MINUTE'
    HOUR = 'HOUR'
    DAY = 'DAY'
    WEEK = 'WEEK'
    MONTH = 'MONTH'
    LIFETIME = 'LIFETIME'
    POD = 'POD'
    STREAM = 'STREAM'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FrequencyCap:
    r"""Message contains details about publisher-set frequency caps of the delivery."""
    
    max_impressions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxImpressions'), 'exclude': lambda f: f is None }})
    r"""The maximum number of impressions that can be served to a user within the specified time period."""  
    time_units_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timeUnitsCount'), 'exclude': lambda f: f is None }})
    r"""The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped."""  
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timeUnitType'), 'exclude': lambda f: f is None }})
    r"""The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped."""  
    