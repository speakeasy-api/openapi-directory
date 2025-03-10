"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import computeenginetargetdetails as shared_computeenginetargetdetails
from ..shared import cutoverstep as shared_cutoverstep
from ..shared import status as shared_status
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CutoverJobStateEnum(str, Enum):
    r"""Output only. State of the cutover job."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    PENDING = 'PENDING'
    FAILED = 'FAILED'
    SUCCEEDED = 'SUCCEEDED'
    CANCELLED = 'CANCELLED'
    CANCELLING = 'CANCELLING'
    ACTIVE = 'ACTIVE'
    ADAPTING_OS = 'ADAPTING_OS'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CutoverJob:
    r"""CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot."""
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('computeEngineTargetDetails'), 'exclude': lambda f: f is None }})
    r"""ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the cutover job was created (as an API call, not when it was actually created in the target)."""  
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the cutover job had finished."""  
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})
    r"""The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. The name of the cutover job."""  
    progress_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('progressPercent'), 'exclude': lambda f: f is None }})
    r"""Output only. The current progress in percentage of the cutover job."""  
    state: Optional[CutoverJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. State of the cutover job."""  
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stateMessage'), 'exclude': lambda f: f is None }})
    r"""Output only. A message providing possible extra details about the current state."""  
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stateTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the state was last updated."""  
    steps: Optional[list[shared_cutoverstep.CutoverStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('steps'), 'exclude': lambda f: f is None }})
    r"""Output only. The cutover steps list representing its progress."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CutoverJobInput:
    r"""CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot."""
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('computeEngineTargetDetails'), 'exclude': lambda f: f is None }})
    r"""ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project."""  
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})
    r"""The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."""  
    