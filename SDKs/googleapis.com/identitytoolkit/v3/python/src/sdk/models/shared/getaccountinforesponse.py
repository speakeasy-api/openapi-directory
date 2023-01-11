import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userinfo as shared_userinfo


@dataclass_json
@dataclasses.dataclass
class GetAccountInfoResponse:
    r"""GetAccountInfoResponse
    Response of getting account information.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    users: Optional[list[shared_userinfo.UserInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
