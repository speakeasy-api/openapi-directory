import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InstanceAvailabilityEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RESIDENT = "RESIDENT"
    DYNAMIC = "DYNAMIC"

class InstanceVMLivenessEnum(str, Enum):
    LIVENESS_STATE_UNSPECIFIED = "LIVENESS_STATE_UNSPECIFIED"
    UNKNOWN = "UNKNOWN"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    DRAINING = "DRAINING"
    TIMEOUT = "TIMEOUT"


@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    An Instance resource is the computing unit that App Engine uses to automatically scale an application.
    """
    
    app_engine_release: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineRelease') }})
    availability: Optional[InstanceAvailabilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    average_latency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageLatency') }})
    errors: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryUsage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    qps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qps') }})
    requests: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    vm_debug_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmDebugEnabled') }})
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vm_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmIp') }})
    vm_liveness: Optional[InstanceVMLivenessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmLiveness') }})
    vm_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    vm_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmStatus') }})
    vm_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmZoneName') }})
    
