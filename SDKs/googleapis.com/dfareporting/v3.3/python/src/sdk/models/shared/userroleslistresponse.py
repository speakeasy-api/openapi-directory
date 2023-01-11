import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userrole as shared_userrole


@dataclass_json
@dataclasses.dataclass
class UserRolesListResponse:
    r"""UserRolesListResponse
    User Role List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_roles: Optional[list[shared_userrole.UserRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoles') }})
    
