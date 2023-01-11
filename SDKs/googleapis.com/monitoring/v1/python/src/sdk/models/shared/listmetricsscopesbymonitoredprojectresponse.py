import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricsscope as shared_metricsscope


@dataclass_json
@dataclasses.dataclass
class ListMetricsScopesByMonitoredProjectResponse:
    r"""ListMetricsScopesByMonitoredProjectResponse
    Response for the ListMetricsScopesByMonitoredProject method.
    """
    
    metrics_scopes: Optional[list[shared_metricsscope.MetricsScope]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsScopes') }})
    
