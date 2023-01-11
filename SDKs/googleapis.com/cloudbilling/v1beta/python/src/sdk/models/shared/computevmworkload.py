import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestaccelerator as shared_guestaccelerator
from ..shared import usage as shared_usage
from ..shared import machinetype as shared_machinetype
from ..shared import persistentdisk as shared_persistentdisk


@dataclass_json
@dataclasses.dataclass
class ComputeVMWorkload:
    r"""ComputeVMWorkload
    Specificies usage of a set of identical compute VM instances.
    """
    
    enable_confidential_compute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableConfidentialCompute') }})
    guest_accelerator: Optional[shared_guestaccelerator.GuestAccelerator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAccelerator') }})
    instances_running: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instancesRunning') }})
    licenses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    machine_type: Optional[shared_machinetype.MachineType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    persistent_disks: Optional[list[shared_persistentdisk.PersistentDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentDisks') }})
    preemptible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
