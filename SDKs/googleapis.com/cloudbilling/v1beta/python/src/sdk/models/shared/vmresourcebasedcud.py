import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestaccelerator as shared_guestaccelerator

class VMResourceBasedCudPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    TWELVE_MONTH = "TWELVE_MONTH"
    THIRTY_SIX_MONTH = "THIRTY_SIX_MONTH"


@dataclass_json
@dataclasses.dataclass
class VMResourceBasedCud:
    r"""VMResourceBasedCud
    Specifies a resource-based committed use discount (CUD).
    """
    
    guest_accelerator: Optional[shared_guestaccelerator.GuestAccelerator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAccelerator') }})
    machine_series: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineSeries') }})
    memory_size_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeGb') }})
    plan: Optional[VMResourceBasedCudPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    virtual_cpu_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualCpuCount') }})
    
