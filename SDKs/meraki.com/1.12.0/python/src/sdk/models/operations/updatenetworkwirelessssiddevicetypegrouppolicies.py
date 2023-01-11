import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    GROUP_POLICY = "Group policy"

class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum(str, Enum):
    ANDROID = "Android"
    BLACK_BERRY = "BlackBerry"
    CHROME_OS = "Chrome OS"
    I_PAD = "iPad"
    I_PHONE = "iPhone"
    I_POD = "iPod"
    MAC_OS_X = "Mac OS X"
    WINDOWS = "Windows"
    WINDOWS_PHONE = "Windows Phone"
    B_AND_N_NOOK = "B&N Nook"
    OTHER_OS = "Other OS"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies:
    device_policy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    device_type: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    group_policy_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody:
    device_type_policies: Optional[list[UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypePolicies') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest:
    path_params: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_device_type_group_policies_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
