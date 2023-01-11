import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeenginetargetdefaults as shared_computeenginetargetdefaults
from ..shared import replicationcycle as shared_replicationcycle
from ..shared import status as shared_status
from ..shared import replicationsync as shared_replicationsync
from ..shared import schedulepolicy as shared_schedulepolicy
from ..shared import clonejob as shared_clonejob
from ..shared import cutoverjob as shared_cutoverjob
from ..shared import computeenginetargetdefaults as shared_computeenginetargetdefaults

class MigratingVMStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    READY = "READY"
    FIRST_SYNC = "FIRST_SYNC"
    ACTIVE = "ACTIVE"
    CUTTING_OVER = "CUTTING_OVER"
    CUTOVER = "CUTOVER"
    FINAL_SYNC = "FINAL_SYNC"
    PAUSED = "PAUSED"
    FINALIZING = "FINALIZING"
    FINALIZED = "FINALIZED"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class MigratingVM:
    r"""MigratingVM
    MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
    """
    
    compute_engine_target_defaults: Optional[shared_computeenginetargetdefaults.ComputeEngineTargetDefaults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDefaults') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_sync_info: Optional[shared_replicationcycle.ReplicationCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSyncInfo') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_sync: Optional[shared_replicationsync.ReplicationSync] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[shared_schedulepolicy.SchedulePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    recent_clone_jobs: Optional[list[shared_clonejob.CloneJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentCloneJobs') }})
    recent_cutover_jobs: Optional[list[shared_cutoverjob.CutoverJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentCutoverJobs') }})
    source_vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVmId') }})
    state: Optional[MigratingVMStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class MigratingVMInput:
    r"""MigratingVMInput
    MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
    """
    
    compute_engine_target_defaults: Optional[shared_computeenginetargetdefaults.ComputeEngineTargetDefaultsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDefaults') }})
    current_sync_info: Optional[shared_replicationcycle.ReplicationCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSyncInfo') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_sync: Optional[shared_replicationsync.ReplicationSync] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync') }})
    policy: Optional[shared_schedulepolicy.SchedulePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    source_vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVmId') }})
    
