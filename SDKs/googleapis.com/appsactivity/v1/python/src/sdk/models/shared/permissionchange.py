import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission as shared_permission


@dataclass_json
@dataclasses.dataclass
class PermissionChange:
    r"""PermissionChange
    Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
    """
    
    added_permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedPermissions') }})
    removed_permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedPermissions') }})
    
