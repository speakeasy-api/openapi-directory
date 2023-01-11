import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_
from ..shared import hourlymetrics as shared_hourlymetrics
from ..shared import weekdaymetrics as shared_weekdaymetrics


@dataclass_json
@dataclasses.dataclass
class AggregateMetrics:
    r"""AggregateMetrics
    Metrics aggregated over the input time range.
    """
    
    answered_calls_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeredCallsCount') }})
    end_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    hourly_metrics: Optional[list[shared_hourlymetrics.HourlyMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourlyMetrics') }})
    missed_calls_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missedCallsCount') }})
    start_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    weekday_metrics: Optional[list[shared_weekdaymetrics.WeekDayMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekdayMetrics') }})
    
