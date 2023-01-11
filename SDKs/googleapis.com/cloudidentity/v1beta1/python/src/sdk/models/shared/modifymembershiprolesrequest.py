import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershiprole as shared_membershiprole
from ..shared import updatemembershiprolesparams as shared_updatemembershiprolesparams


@dataclass_json
@dataclasses.dataclass
class ModifyMembershipRolesRequest:
    r"""ModifyMembershipRolesRequest
    The request message for MembershipsService.ModifyMembershipRoles.
    """
    
    add_roles: Optional[list[shared_membershiprole.MembershipRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addRoles') }})
    remove_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeRoles') }})
    update_roles_params: Optional[list[shared_updatemembershiprolesparams.UpdateMembershipRolesParams]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateRolesParams') }})
    
