import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import specialhourperiod as shared_specialhourperiod


@dataclass_json
@dataclasses.dataclass
class SpecialHours:
    r"""SpecialHours
    Represents a set of time periods when a location's operational hours differ from its normal business hours.
    """
    
    special_hour_periods: Optional[list[shared_specialhourperiod.SpecialHourPeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHourPeriods') }})
    
