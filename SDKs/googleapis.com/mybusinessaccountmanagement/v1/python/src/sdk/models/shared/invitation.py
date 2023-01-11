import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import targetlocation as shared_targetlocation

class InvitationRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"

class InvitationTargetTypeEnum(str, Enum):
    TARGET_TYPE_UNSPECIFIED = "TARGET_TYPE_UNSPECIFIED"
    ACCOUNTS_ONLY = "ACCOUNTS_ONLY"
    LOCATIONS_ONLY = "LOCATIONS_ONLY"


@dataclass_json
@dataclasses.dataclass
class Invitation:
    r"""Invitation
    Represents a pending invitation.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[InvitationRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    target_account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    target_location: Optional[shared_targetlocation.TargetLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLocation') }})
    target_type: Optional[InvitationTargetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    
