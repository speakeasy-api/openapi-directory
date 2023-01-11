import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MeteringMembershipState:
    r"""MeteringMembershipState
    **Metering**: Per-Membership Feature State.
    """
    
    last_measurement_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMeasurementTime') }})
    precise_last_measured_cluster_vcpu_capacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preciseLastMeasuredClusterVcpuCapacity') }})
    
