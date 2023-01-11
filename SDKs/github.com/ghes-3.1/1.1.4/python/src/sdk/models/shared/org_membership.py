import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization_simple as shared_organization_simple


@dataclass_json
@dataclasses.dataclass
class OrgMembershipPermissions:
    can_create_repository: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_create_repository') }})
    
class OrgMembershipRoleEnum(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"
    BILLING_MANAGER = "billing_manager"

class OrgMembershipStateEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"


@dataclass_json
@dataclasses.dataclass
class OrgMembershipSimpleUser:
    r"""OrgMembershipSimpleUser
    Simple User
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    

@dataclass_json
@dataclasses.dataclass
class OrgMembership:
    r"""OrgMembership
    Org Membership
    """
    
    organization: shared_organization_simple.OrganizationSimple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    organization_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_url') }})
    role: OrgMembershipRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: OrgMembershipStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: OrgMembershipSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    permissions: Optional[OrgMembershipPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
