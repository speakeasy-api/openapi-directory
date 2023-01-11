import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gaugeview as shared_gaugeview
from ..shared import sparkchartview as shared_sparkchartview
from ..shared import threshold as shared_threshold
from ..shared import timeseriesquery as shared_timeseriesquery


@dataclass_json
@dataclasses.dataclass
class Scorecard:
    r"""Scorecard
    A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
    """
    
    gauge_view: Optional[shared_gaugeview.GaugeView] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gaugeView') }})
    spark_chart_view: Optional[shared_sparkchartview.SparkChartView] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkChartView') }})
    thresholds: Optional[list[shared_threshold.Threshold]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholds') }})
    time_series_query: Optional[shared_timeseriesquery.TimeSeriesQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQuery') }})
    
