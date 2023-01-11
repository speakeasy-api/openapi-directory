import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityservicemembershipspec as shared_identityservicemembershipspec

class IdentityServiceMembershipStateStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    OK = "OK"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class IdentityServiceMembershipState:
    r"""IdentityServiceMembershipState
    **Anthos Identity Service**: State for a single Membership.
    """
    
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    installed_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedVersion') }})
    member_config: Optional[shared_identityservicemembershipspec.IdentityServiceMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberConfig') }})
    state: Optional[IdentityServiceMembershipStateStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
