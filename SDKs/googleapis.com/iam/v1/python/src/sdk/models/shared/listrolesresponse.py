import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import role as shared_role


@dataclass_json
@dataclasses.dataclass
class ListRolesResponse:
    r"""ListRolesResponse
    The response containing the roles defined under a resource.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    roles: Optional[list[shared_role.Role]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
