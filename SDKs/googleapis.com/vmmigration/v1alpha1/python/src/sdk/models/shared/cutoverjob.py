import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeenginetargetdetails as shared_computeenginetargetdetails
from ..shared import targetvmdetails as shared_targetvmdetails
from ..shared import status as shared_status
from ..shared import cutoverstep as shared_cutoverstep
from ..shared import targetvmdetails as shared_targetvmdetails

class CutoverJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    CANCELLING = "CANCELLING"
    ACTIVE = "ACTIVE"
    ADAPTING_OS = "ADAPTING_OS"


@dataclass_json
@dataclasses.dataclass
class CutoverJob:
    r"""CutoverJob
    CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
    """
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    compute_engine_vm_details: Optional[shared_targetvmdetails.TargetVMDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineVmDetails') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    progress_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressPercent') }})
    state: Optional[CutoverJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    steps: Optional[list[shared_cutoverstep.CutoverStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    target_details: Optional[shared_targetvmdetails.TargetVMDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class CutoverJobInput:
    r"""CutoverJobInput
    CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
    """
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    compute_engine_vm_details: Optional[shared_targetvmdetails.TargetVMDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineVmDetails') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    target_details: Optional[shared_targetvmdetails.TargetVMDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDetails') }})
    
