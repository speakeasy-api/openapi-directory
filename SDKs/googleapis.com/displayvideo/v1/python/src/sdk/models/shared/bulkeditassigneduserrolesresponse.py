import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assigneduserrole as shared_assigneduserrole


@dataclass_json
@dataclasses.dataclass
class BulkEditAssignedUserRolesResponse:
    created_assigned_user_roles: Optional[list[shared_assigneduserrole.AssignedUserRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedUserRoles') }})
    
