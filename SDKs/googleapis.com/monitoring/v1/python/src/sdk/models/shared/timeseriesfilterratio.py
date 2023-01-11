import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratiopart as shared_ratiopart
from ..shared import picktimeseriesfilter as shared_picktimeseriesfilter
from ..shared import aggregation as shared_aggregation
from ..shared import statisticaltimeseriesfilter as shared_statisticaltimeseriesfilter


@dataclass_json
@dataclasses.dataclass
class TimeSeriesFilterRatio:
    r"""TimeSeriesFilterRatio
    A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
    """
    
    denominator: Optional[shared_ratiopart.RatioPart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominator') }})
    numerator: Optional[shared_ratiopart.RatioPart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numerator') }})
    pick_time_series_filter: Optional[shared_picktimeseriesfilter.PickTimeSeriesFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickTimeSeriesFilter') }})
    secondary_aggregation: Optional[shared_aggregation.Aggregation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryAggregation') }})
    statistical_time_series_filter: Optional[shared_statisticaltimeseriesfilter.StatisticalTimeSeriesFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalTimeSeriesFilter') }})
    
