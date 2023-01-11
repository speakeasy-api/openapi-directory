import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatemetrics as shared_aggregatemetrics

class BusinessCallsInsightsMetricTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    AGGREGATE_COUNT = "AGGREGATE_COUNT"


@dataclass_json
@dataclasses.dataclass
class BusinessCallsInsights:
    r"""BusinessCallsInsights
    Insights for calls made to a location.
    """
    
    aggregate_metrics: Optional[shared_aggregatemetrics.AggregateMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateMetrics') }})
    metric_type: Optional[BusinessCallsInsightsMetricTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
