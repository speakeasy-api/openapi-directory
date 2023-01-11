import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationinfo as shared_organizationinfo
from ..shared import organizationinfo as shared_organizationinfo

class AccountPermissionLevelEnum(str, Enum):
    PERMISSION_LEVEL_UNSPECIFIED = "PERMISSION_LEVEL_UNSPECIFIED"
    OWNER_LEVEL = "OWNER_LEVEL"
    MEMBER_LEVEL = "MEMBER_LEVEL"

class AccountRoleEnum(str, Enum):
    ACCOUNT_ROLE_UNSPECIFIED = "ACCOUNT_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"

class AccountTypeEnum(str, Enum):
    ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED"
    PERSONAL = "PERSONAL"
    LOCATION_GROUP = "LOCATION_GROUP"
    USER_GROUP = "USER_GROUP"
    ORGANIZATION = "ORGANIZATION"

class AccountVerificationStateEnum(str, Enum):
    VERIFICATION_STATE_UNSPECIFIED = "VERIFICATION_STATE_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFICATION_REQUESTED = "VERIFICATION_REQUESTED"

class AccountVettedStateEnum(str, Enum):
    VETTED_STATE_UNSPECIFIED = "VETTED_STATE_UNSPECIFIED"
    NOT_VETTED = "NOT_VETTED"
    VETTED = "VETTED"
    INVALID = "INVALID"


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
    """
    
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_info: Optional[shared_organizationinfo.OrganizationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationInfo') }})
    permission_level: Optional[AccountPermissionLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionLevel') }})
    primary_owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryOwner') }})
    role: Optional[AccountRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    type: Optional[AccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    verification_state: Optional[AccountVerificationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationState') }})
    vetted_state: Optional[AccountVettedStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vettedState') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountInput:
    r"""AccountInput
    An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
    """
    
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_info: Optional[shared_organizationinfo.OrganizationInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationInfo') }})
    primary_owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryOwner') }})
    type: Optional[AccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
