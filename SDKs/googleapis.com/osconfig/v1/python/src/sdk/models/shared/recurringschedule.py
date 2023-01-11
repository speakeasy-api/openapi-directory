import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monthlyschedule as shared_monthlyschedule
from ..shared import timeofday as shared_timeofday
from ..shared import timezone as shared_timezone
from ..shared import weeklyschedule as shared_weeklyschedule

class RecurringScheduleFrequencyEnum(str, Enum):
    FREQUENCY_UNSPECIFIED = "FREQUENCY_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class RecurringScheduleInput:
    r"""RecurringScheduleInput
    Sets the time for recurring patch deployments.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    frequency: Optional[RecurringScheduleFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    monthly: Optional[shared_monthlyschedule.MonthlySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    time_of_day: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOfDay') }})
    time_zone: Optional[shared_timezone.TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    weekly: Optional[shared_weeklyschedule.WeeklySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly') }})
    

@dataclass_json
@dataclasses.dataclass
class RecurringSchedule:
    r"""RecurringSchedule
    Sets the time for recurring patch deployments.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    frequency: Optional[RecurringScheduleFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    last_execute_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecuteTime') }})
    monthly: Optional[shared_monthlyschedule.MonthlySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    next_execute_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextExecuteTime') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    time_of_day: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOfDay') }})
    time_zone: Optional[shared_timezone.TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    weekly: Optional[shared_weeklyschedule.WeeklySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly') }})
    
