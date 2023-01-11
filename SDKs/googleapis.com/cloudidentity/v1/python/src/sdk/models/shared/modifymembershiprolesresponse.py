import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membership as shared_membership


@dataclass_json
@dataclasses.dataclass
class ModifyMembershipRolesResponse:
    r"""ModifyMembershipRolesResponse
    The response message for MembershipsService.ModifyMembershipRoles.
    """
    
    membership: Optional[shared_membership.Membership] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    
