import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membership as shared_membership


@dataclass_json
@dataclasses.dataclass
class ValidateCreateMembershipRequestInput:
    r"""ValidateCreateMembershipRequestInput
    Request message for the `GkeHub.ValidateCreateMembership` method.
    """
    
    membership: Optional[shared_membership.MembershipInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    membership_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipId') }})
    
