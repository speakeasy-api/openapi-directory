import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountpermission as shared_accountpermission


@dataclass_json
@dataclasses.dataclass
class AccountPermissionsListResponse:
    r"""AccountPermissionsListResponse
    Account Permission List Response
    """
    
    account_permissions: Optional[list[shared_accountpermission.AccountPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountPermissions') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
