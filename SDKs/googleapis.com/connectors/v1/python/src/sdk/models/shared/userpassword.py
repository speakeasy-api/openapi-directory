import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret


@dataclass_json
@dataclasses.dataclass
class UserPassword:
    r"""UserPassword
    Parameters to support Username and Password Authentication.
    """
    
    password: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
