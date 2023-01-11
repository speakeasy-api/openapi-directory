import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue


@dataclass_json
@dataclasses.dataclass
class LocalPostMetrics:
    r"""LocalPostMetrics
    All the metrics requested for a Local Post.
    """
    
    local_post_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostName') }})
    metric_values: Optional[list[shared_metricvalue.MetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
