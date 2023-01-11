import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregation as shared_aggregation
from ..shared import trigger as shared_trigger


@dataclass_json
@dataclasses.dataclass
class MetricAbsence:
    r"""MetricAbsence
    A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
    """
    
    aggregations: Optional[list[shared_aggregation.Aggregation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    trigger: Optional[shared_trigger.Trigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
