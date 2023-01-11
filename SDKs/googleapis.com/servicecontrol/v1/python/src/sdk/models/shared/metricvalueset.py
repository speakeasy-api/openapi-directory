import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue


@dataclass_json
@dataclasses.dataclass
class MetricValueSet:
    r"""MetricValueSet
    Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
    """
    
    metric_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_values: Optional[list[shared_metricvalue.MetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
