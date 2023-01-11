import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectfilter as shared_objectfilter

class AccountUserProfileTraffickerTypeEnum(str, Enum):
    INTERNAL_NON_TRAFFICKER = "INTERNAL_NON_TRAFFICKER"
    INTERNAL_TRAFFICKER = "INTERNAL_TRAFFICKER"
    EXTERNAL_TRAFFICKER = "EXTERNAL_TRAFFICKER"

class AccountUserProfileUserAccessTypeEnum(str, Enum):
    NORMAL_USER = "NORMAL_USER"
    SUPER_USER = "SUPER_USER"
    INTERNAL_ADMINISTRATOR = "INTERNAL_ADMINISTRATOR"
    READ_ONLY_SUPER_USER = "READ_ONLY_SUPER_USER"


@dataclass_json
@dataclasses.dataclass
class AccountUserProfile:
    r"""AccountUserProfile
    AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    advertiser_filter: Optional[shared_objectfilter.ObjectFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserFilter') }})
    campaign_filter: Optional[shared_objectfilter.ObjectFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignFilter') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_filter: Optional[shared_objectfilter.ObjectFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteFilter') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    trafficker_type: Optional[AccountUserProfileTraffickerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffickerType') }})
    user_access_type: Optional[AccountUserProfileUserAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAccessType') }})
    user_role_filter: Optional[shared_objectfilter.ObjectFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoleFilter') }})
    user_role_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoleId') }})
    
