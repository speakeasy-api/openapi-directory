import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matterpermission as shared_matterpermission


@dataclass_json
@dataclasses.dataclass
class AddMatterPermissionsRequest:
    r"""AddMatterPermissionsRequest
    Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
    """
    
    cc_me: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccMe') }})
    matter_permission: Optional[shared_matterpermission.MatterPermission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matterPermission') }})
    send_emails: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendEmails') }})
    
