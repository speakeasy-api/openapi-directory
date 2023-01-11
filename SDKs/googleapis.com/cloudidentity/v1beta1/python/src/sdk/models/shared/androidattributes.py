import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AndroidAttributesOwnershipPrivilegeEnum(str, Enum):
    OWNERSHIP_PRIVILEGE_UNSPECIFIED = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
    DEVICE_ADMINISTRATOR = "DEVICE_ADMINISTRATOR"
    PROFILE_OWNER = "PROFILE_OWNER"
    DEVICE_OWNER = "DEVICE_OWNER"


@dataclass_json
@dataclasses.dataclass
class AndroidAttributes:
    r"""AndroidAttributes
    Resource representing the Android specific attributes of a Device.
    """
    
    enabled_unknown_sources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledUnknownSources') }})
    owner_profile_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerProfileAccount') }})
    ownership_privilege: Optional[AndroidAttributesOwnershipPrivilegeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownershipPrivilege') }})
    supports_work_profile: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsWorkProfile') }})
    
