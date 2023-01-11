import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assigneduserrole as shared_assigneduserrole


@dataclass_json
@dataclasses.dataclass
class BulkEditAssignedUserRolesRequestInput:
    r"""BulkEditAssignedUserRolesRequestInput
    Request message for BulkEditAssignedUserRoles.
    """
    
    created_assigned_user_roles: Optional[list[shared_assigneduserrole.AssignedUserRoleInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedUserRoles') }})
    deleted_assigned_user_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedAssignedUserRoles') }})
    
