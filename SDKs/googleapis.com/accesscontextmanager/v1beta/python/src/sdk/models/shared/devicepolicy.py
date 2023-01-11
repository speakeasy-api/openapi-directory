import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import osconstraint as shared_osconstraint

class DevicePolicyAllowedDeviceManagementLevelsEnum(str, Enum):
    MANAGEMENT_UNSPECIFIED = "MANAGEMENT_UNSPECIFIED"
    NONE = "NONE"
    BASIC = "BASIC"
    COMPLETE = "COMPLETE"

class DevicePolicyAllowedEncryptionStatusesEnum(str, Enum):
    ENCRYPTION_UNSPECIFIED = "ENCRYPTION_UNSPECIFIED"
    ENCRYPTION_UNSUPPORTED = "ENCRYPTION_UNSUPPORTED"
    UNENCRYPTED = "UNENCRYPTED"
    ENCRYPTED = "ENCRYPTED"


@dataclass_json
@dataclasses.dataclass
class DevicePolicy:
    r"""DevicePolicy
    `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
    """
    
    allowed_device_management_levels: Optional[list[DevicePolicyAllowedDeviceManagementLevelsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedDeviceManagementLevels') }})
    allowed_encryption_statuses: Optional[list[DevicePolicyAllowedEncryptionStatusesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedEncryptionStatuses') }})
    os_constraints: Optional[list[shared_osconstraint.OsConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osConstraints') }})
    require_admin_approval: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireAdminApproval') }})
    require_corp_owned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireCorpOwned') }})
    require_screenlock: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireScreenlock') }})
    
