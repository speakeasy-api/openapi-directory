import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import targetlocation as shared_targetlocation

class InvitationRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    CO_OWNER = "CO_OWNER"
    MANAGER = "MANAGER"
    COMMUNITY_MANAGER = "COMMUNITY_MANAGER"


@dataclass_json
@dataclasses.dataclass
class Invitation:
    r"""Invitation
    Output only. Represents a pending invitation.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[InvitationRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    target_account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    target_location: Optional[shared_targetlocation.TargetLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLocation') }})
    
