"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import clonestep as shared_clonestep
from ..shared import computeenginetargetdetails as shared_computeenginetargetdetails
from ..shared import status as shared_status
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CloneJobStateEnum(str, Enum):
    r"""Output only. State of the clone job."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    PENDING = 'PENDING'
    ACTIVE = 'ACTIVE'
    FAILED = 'FAILED'
    SUCCEEDED = 'SUCCEEDED'
    CANCELLED = 'CANCELLED'
    CANCELLING = 'CANCELLING'
    ADAPTING_OS = 'ADAPTING_OS'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CloneJob:
    r"""CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone."""
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('computeEngineTargetDetails'), 'exclude': lambda f: f is None }})
    r"""ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the clone job was created (as an API call, not when it was actually created in the target)."""  
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the clone job was ended."""  
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})
    r"""The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. The name of the clone."""  
    state: Optional[CloneJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. State of the clone job."""  
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stateTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time the state was last updated."""  
    steps: Optional[list[shared_clonestep.CloneStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('steps'), 'exclude': lambda f: f is None }})
    r"""Output only. The clone steps list representing its progress."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CloneJobInput:
    r"""CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone."""
    
    compute_engine_target_details: Optional[shared_computeenginetargetdetails.ComputeEngineTargetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('computeEngineTargetDetails'), 'exclude': lambda f: f is None }})
    r"""ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project."""  
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})
    r"""The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."""  
    