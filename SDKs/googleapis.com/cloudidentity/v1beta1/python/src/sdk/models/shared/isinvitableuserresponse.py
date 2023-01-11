import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IsInvitableUserResponse:
    r"""IsInvitableUserResponse
    Response for IsInvitableUser RPC.
    """
    
    is_invitable_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInvitableUser') }})
    
