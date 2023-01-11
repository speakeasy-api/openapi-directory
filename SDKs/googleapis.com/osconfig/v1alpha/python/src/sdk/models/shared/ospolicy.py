import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcegroup as shared_ospolicyresourcegroup

class OsPolicyModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    VALIDATION = "VALIDATION"
    ENFORCEMENT = "ENFORCEMENT"


@dataclass_json
@dataclasses.dataclass
class OsPolicy:
    r"""OsPolicy
    An OS policy defines the desired state configuration for a VM.
    """
    
    allow_no_resource_group_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowNoResourceGroupMatch') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: Optional[OsPolicyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    resource_groups: Optional[list[shared_ospolicyresourcegroup.OsPolicyResourceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroups') }})
    
