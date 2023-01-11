import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import timeseriesdata as shared_timeseriesdata
from ..shared import timeseriesdescriptor as shared_timeseriesdescriptor


@dataclass_json
@dataclasses.dataclass
class QueryTimeSeriesResponse:
    r"""QueryTimeSeriesResponse
    The QueryTimeSeries response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    partial_errors: Optional[list[shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialErrors') }})
    time_series_data: Optional[list[shared_timeseriesdata.TimeSeriesData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesData') }})
    time_series_descriptor: Optional[shared_timeseriesdescriptor.TimeSeriesDescriptor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesDescriptor') }})
    
