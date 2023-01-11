import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcerefreshdailyschedule as shared_datasourcerefreshdailyschedule
from ..shared import datasourcerefreshmonthlyschedule as shared_datasourcerefreshmonthlyschedule
from ..shared import interval as shared_interval
from ..shared import datasourcerefreshweeklyschedule as shared_datasourcerefreshweeklyschedule

class DataSourceRefreshScheduleRefreshScopeEnum(str, Enum):
    DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
    ALL_DATA_SOURCES = "ALL_DATA_SOURCES"


@dataclass_json
@dataclasses.dataclass
class DataSourceRefreshSchedule:
    r"""DataSourceRefreshSchedule
    Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
    """
    
    daily_schedule: Optional[shared_datasourcerefreshdailyschedule.DataSourceRefreshDailySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    monthly_schedule: Optional[shared_datasourcerefreshmonthlyschedule.DataSourceRefreshMonthlySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    next_run: Optional[shared_interval.Interval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRun') }})
    refresh_scope: Optional[DataSourceRefreshScheduleRefreshScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshScope') }})
    weekly_schedule: Optional[shared_datasourcerefreshweeklyschedule.DataSourceRefreshWeeklySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    
