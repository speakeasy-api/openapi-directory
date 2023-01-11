import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ClientPermissions:
    r"""GoogleCloudIdentitytoolkitAdminV2ClientPermissions
    Configuration related to restricting a user's ability to affect their account.
    """
    
    disabled_user_deletion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledUserDeletion') }})
    disabled_user_signup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledUserSignup') }})
    
