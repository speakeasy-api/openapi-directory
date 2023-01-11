import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountpermissiongroup as shared_accountpermissiongroup


@dataclass_json
@dataclasses.dataclass
class AccountPermissionGroupsListResponse:
    r"""AccountPermissionGroupsListResponse
    Account Permission Group List Response
    """
    
    account_permission_groups: Optional[list[shared_accountpermissiongroup.AccountPermissionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountPermissionGroups') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
