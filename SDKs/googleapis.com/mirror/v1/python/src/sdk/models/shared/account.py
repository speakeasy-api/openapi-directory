import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authtoken as shared_authtoken
from ..shared import userdata as shared_userdata


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Represents an account passed into the Account Manager on Glass.
    """
    
    auth_tokens: Optional[list[shared_authtoken.AuthToken]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTokens') }})
    features: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    user_data: Optional[list[shared_userdata.UserData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
