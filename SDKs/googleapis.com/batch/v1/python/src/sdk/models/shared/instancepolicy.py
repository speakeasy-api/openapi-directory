import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accelerator as shared_accelerator
from ..shared import attacheddisk as shared_attacheddisk

class InstancePolicyProvisioningModelEnum(str, Enum):
    PROVISIONING_MODEL_UNSPECIFIED = "PROVISIONING_MODEL_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPOT = "SPOT"
    PREEMPTIBLE = "PREEMPTIBLE"


@dataclass_json
@dataclasses.dataclass
class InstancePolicy:
    r"""InstancePolicy
    InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
    """
    
    accelerators: Optional[list[shared_accelerator.Accelerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disks: Optional[list[shared_attacheddisk.AttachedDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    min_cpu_platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    provisioning_model: Optional[InstancePolicyProvisioningModelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningModel') }})
    
