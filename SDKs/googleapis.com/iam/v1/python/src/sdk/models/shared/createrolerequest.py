import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import role as shared_role


@dataclass_json
@dataclasses.dataclass
class CreateRoleRequest:
    r"""CreateRoleRequest
    The request to create a new role.
    """
    
    role: Optional[shared_role.Role] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    role_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleId') }})
    
