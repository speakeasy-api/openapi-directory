import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregation as shared_aggregation
from ..shared import picktimeseriesfilter as shared_picktimeseriesfilter
from ..shared import statisticaltimeseriesfilter as shared_statisticaltimeseriesfilter


@dataclass_json
@dataclasses.dataclass
class TimeSeriesFilter:
    r"""TimeSeriesFilter
    A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
    """
    
    aggregation: Optional[shared_aggregation.Aggregation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    pick_time_series_filter: Optional[shared_picktimeseriesfilter.PickTimeSeriesFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickTimeSeriesFilter') }})
    secondary_aggregation: Optional[shared_aggregation.Aggregation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryAggregation') }})
    statistical_time_series_filter: Optional[shared_statisticaltimeseriesfilter.StatisticalTimeSeriesFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalTimeSeriesFilter') }})
    
