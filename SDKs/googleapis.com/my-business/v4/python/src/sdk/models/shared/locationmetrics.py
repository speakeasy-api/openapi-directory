import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalue as shared_metricvalue


@dataclass_json
@dataclasses.dataclass
class LocationMetrics:
    r"""LocationMetrics
    A series of Metrics and BreakdownMetrics associated with a Location over some time range.
    """
    
    location_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    metric_values: Optional[list[shared_metricvalue.MetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
