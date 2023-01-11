import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserPassword:
    r"""UserPassword
    The username/password for a database user. Used for specifying initial users at cluster creation time.
    """
    
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_set: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordSet') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class UserPasswordInput:
    r"""UserPasswordInput
    The username/password for a database user. Used for specifying initial users at cluster creation time.
    """
    
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
