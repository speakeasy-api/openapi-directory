import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeseries as shared_timeseries


@dataclass_json
@dataclasses.dataclass
class GetDailyMetricsTimeSeriesResponse:
    r"""GetDailyMetricsTimeSeriesResponse
    Represents the response for GetDailyMetricsTimeSeries.
    """
    
    time_series: Optional[shared_timeseries.TimeSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeries') }})
    
