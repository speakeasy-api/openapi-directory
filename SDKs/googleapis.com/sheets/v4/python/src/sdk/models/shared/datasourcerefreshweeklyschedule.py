import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeofday as shared_timeofday

class DataSourceRefreshWeeklyScheduleDaysOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclasses.dataclass
class DataSourceRefreshWeeklySchedule:
    r"""DataSourceRefreshWeeklySchedule
    A weekly schedule for data to refresh on specific days in a given time interval.
    """
    
    days_of_week: Optional[list[DataSourceRefreshWeeklyScheduleDaysOfWeekEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysOfWeek') }})
    start_time: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
