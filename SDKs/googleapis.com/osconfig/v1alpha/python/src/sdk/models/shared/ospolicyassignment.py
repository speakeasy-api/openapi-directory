import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentinstancefilter as shared_ospolicyassignmentinstancefilter
from ..shared import ospolicy as shared_ospolicy
from ..shared import ospolicyassignmentrollout as shared_ospolicyassignmentrollout

class OsPolicyAssignmentRolloutStateEnum(str, Enum):
    ROLLOUT_STATE_UNSPECIFIED = "ROLLOUT_STATE_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentInput:
    r"""OsPolicyAssignmentInput
    OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    instance_filter: Optional[shared_ospolicyassignmentinstancefilter.OsPolicyAssignmentInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policies: Optional[list[shared_ospolicy.OsPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicies') }})
    rollout: Optional[shared_ospolicyassignmentrollout.OsPolicyAssignmentRollout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    

@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignment:
    r"""OsPolicyAssignment
    OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
    """
    
    baseline: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseline') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    instance_filter: Optional[shared_ospolicyassignmentinstancefilter.OsPolicyAssignmentInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policies: Optional[list[shared_ospolicy.OsPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicies') }})
    reconciling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    revision_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    rollout: Optional[shared_ospolicyassignmentrollout.OsPolicyAssignmentRollout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    rollout_state: Optional[OsPolicyAssignmentRolloutStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutState') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
