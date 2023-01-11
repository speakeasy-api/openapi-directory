import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weekdayofmonth as shared_weekdayofmonth


@dataclass_json
@dataclasses.dataclass
class MonthlySchedule:
    r"""MonthlySchedule
    Represents a monthly schedule. An example of a valid monthly schedule is \"on the third Tuesday of the month\" or \"on the 15th of the month\".
    """
    
    month_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthDay') }})
    week_day_of_month: Optional[shared_weekdayofmonth.WeekDayOfMonth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekDayOfMonth') }})
    
