import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cpuutilization as shared_cpuutilization
from ..shared import custommetric as shared_custommetric
from ..shared import diskutilization as shared_diskutilization
from ..shared import networkutilization as shared_networkutilization
from ..shared import requestutilization as shared_requestutilization
from ..shared import standardschedulersettings as shared_standardschedulersettings


@dataclass_json
@dataclasses.dataclass
class AutomaticScaling:
    r"""AutomaticScaling
    Automatic scaling is based on request rate, response latencies, and other application metrics.
    """
    
    cool_down_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coolDownPeriod') }})
    cpu_utilization: Optional[shared_cpuutilization.CPUUtilization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilization') }})
    custom_metrics: Optional[list[shared_custommetric.CustomMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetrics') }})
    disk_utilization: Optional[shared_diskutilization.DiskUtilization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskUtilization') }})
    max_concurrent_requests: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentRequests') }})
    max_idle_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdleInstances') }})
    max_pending_latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPendingLatency') }})
    max_total_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTotalInstances') }})
    min_idle_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minIdleInstances') }})
    min_pending_latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPendingLatency') }})
    min_total_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTotalInstances') }})
    network_utilization: Optional[shared_networkutilization.NetworkUtilization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUtilization') }})
    request_utilization: Optional[shared_requestutilization.RequestUtilization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestUtilization') }})
    standard_scheduler_settings: Optional[shared_standardschedulersettings.StandardSchedulerSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardSchedulerSettings') }})
    
