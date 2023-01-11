import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeofday as shared_timeofday


@dataclass_json
@dataclasses.dataclass
class DataSourceRefreshMonthlySchedule:
    r"""DataSourceRefreshMonthlySchedule
    A monthly schedule for data to refresh on specific days in the month in a given time interval.
    """
    
    days_of_month: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysOfMonth') }})
    start_time: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
