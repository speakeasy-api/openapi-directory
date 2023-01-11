import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitoredresourcemetadata as shared_monitoredresourcemetadata
from ..shared import metric as shared_metric
from ..shared import point as shared_point
from ..shared import monitoredresource as shared_monitoredresource

class TimeSeriesMetricKindEnum(str, Enum):
    METRIC_KIND_UNSPECIFIED = "METRIC_KIND_UNSPECIFIED"
    GAUGE = "GAUGE"
    DELTA = "DELTA"
    CUMULATIVE = "CUMULATIVE"

class TimeSeriesValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INT64 = "INT64"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    DISTRIBUTION = "DISTRIBUTION"
    MONEY = "MONEY"


@dataclass_json
@dataclasses.dataclass
class TimeSeries:
    r"""TimeSeries
    A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
    """
    
    metadata: Optional[shared_monitoredresourcemetadata.MonitoredResourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    metric: Optional[shared_metric.Metric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_kind: Optional[TimeSeriesMetricKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKind') }})
    points: Optional[list[shared_point.Point]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    resource: Optional[shared_monitoredresource.MonitoredResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value_type: Optional[TimeSeriesValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
