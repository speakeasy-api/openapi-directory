import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationcycle as shared_replicationcycle


@dataclass_json
@dataclasses.dataclass
class CutoverStep:
    r"""CutoverStep
    CutoverStep holds information about the cutover step progress.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    final_sync: Optional[shared_replicationcycle.ReplicationCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalSync') }})
    instantiating_migrated_vm: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instantiatingMigratedVm') }})
    preparing_vm_disks: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparingVmDisks') }})
    previous_replication_cycle: Optional[shared_replicationcycle.ReplicationCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousReplicationCycle') }})
    shutting_down_source_vm: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuttingDownSourceVm') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
