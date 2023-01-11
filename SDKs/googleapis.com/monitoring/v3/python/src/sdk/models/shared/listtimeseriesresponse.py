import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import timeseries as shared_timeseries


@dataclass_json
@dataclasses.dataclass
class ListTimeSeriesResponse:
    r"""ListTimeSeriesResponse
    The ListTimeSeries response.
    """
    
    execution_errors: Optional[list[shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionErrors') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    time_series: Optional[list[shared_timeseries.TimeSeries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeries') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
