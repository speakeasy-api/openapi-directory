import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeofday as shared_timeofday


@dataclass_json
@dataclasses.dataclass
class DataSourceRefreshDailySchedule:
    r"""DataSourceRefreshDailySchedule
    A schedule for data to refresh every day in a given time interval.
    """
    
    start_time: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
