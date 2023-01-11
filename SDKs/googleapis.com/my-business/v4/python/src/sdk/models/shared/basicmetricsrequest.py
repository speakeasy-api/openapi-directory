import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricrequest as shared_metricrequest
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class BasicMetricsRequest:
    r"""BasicMetricsRequest
    A request for basic metric insights.
    """
    
    metric_requests: Optional[list[shared_metricrequest.MetricRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricRequests') }})
    time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
