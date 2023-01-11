import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershiprole as shared_membershiprole


@dataclass_json
@dataclasses.dataclass
class UpdateMembershipRolesParams:
    r"""UpdateMembershipRolesParams
    The details of an update to a `MembershipRole`.
    """
    
    field_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMask') }})
    membership_role: Optional[shared_membershiprole.MembershipRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipRole') }})
    
