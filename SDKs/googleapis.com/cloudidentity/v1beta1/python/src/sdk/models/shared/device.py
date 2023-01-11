import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidattributes as shared_androidattributes
from ..shared import endpointverificationspecificattributes as shared_endpointverificationspecificattributes

class DeviceClientTypesEnum(str, Enum):
    CLIENT_TYPE_UNSPECIFIED = "CLIENT_TYPE_UNSPECIFIED"
    DRIVE_FS = "DRIVE_FS"
    FUNDAMENTAL = "FUNDAMENTAL"
    ENDPOINT_VERIFICATION = "ENDPOINT_VERIFICATION"
    WINDOWS_ADVANCED = "WINDOWS_ADVANCED"
    GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS = "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS"

class DeviceCompromisedStateEnum(str, Enum):
    COMPROMISED_STATE_UNSPECIFIED = "COMPROMISED_STATE_UNSPECIFIED"
    COMPROMISED = "COMPROMISED"
    UNCOMPROMISED = "UNCOMPROMISED"

class DeviceDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    GOOGLE_SYNC = "GOOGLE_SYNC"
    WINDOWS = "WINDOWS"
    MAC_OS = "MAC_OS"
    LINUX = "LINUX"
    CHROME_OS = "CHROME_OS"

class DeviceEncryptionStateEnum(str, Enum):
    ENCRYPTION_STATE_UNSPECIFIED = "ENCRYPTION_STATE_UNSPECIFIED"
    UNSUPPORTED_BY_DEVICE = "UNSUPPORTED_BY_DEVICE"
    ENCRYPTED = "ENCRYPTED"
    NOT_ENCRYPTED = "NOT_ENCRYPTED"

class DeviceManagementStateEnum(str, Enum):
    MANAGEMENT_STATE_UNSPECIFIED = "MANAGEMENT_STATE_UNSPECIFIED"
    APPROVED = "APPROVED"
    BLOCKED = "BLOCKED"
    PENDING = "PENDING"
    UNPROVISIONED = "UNPROVISIONED"
    WIPING = "WIPING"
    WIPED = "WIPED"

class DeviceOwnerTypeEnum(str, Enum):
    DEVICE_OWNERSHIP_UNSPECIFIED = "DEVICE_OWNERSHIP_UNSPECIFIED"
    COMPANY = "COMPANY"
    BYOD = "BYOD"


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
    """
    
    android_specific_attributes: Optional[shared_androidattributes.AndroidAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSpecificAttributes') }})
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTag') }})
    baseband_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basebandVersion') }})
    bootloader_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootloaderVersion') }})
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    build_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildNumber') }})
    client_types: Optional[list[DeviceClientTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTypes') }})
    compromised_state: Optional[DeviceCompromisedStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compromisedState') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_type: Optional[DeviceDeviceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    enabled_developer_options: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledDeveloperOptions') }})
    enabled_usb_debugging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledUsbDebugging') }})
    encryption_state: Optional[DeviceEncryptionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionState') }})
    endpoint_verification_specific_attributes: Optional[shared_endpointverificationspecificattributes.EndpointVerificationSpecificAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointVerificationSpecificAttributes') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    imei: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imei') }})
    kernel_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelVersion') }})
    last_sync_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    management_state: Optional[DeviceManagementStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementState') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    meid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meid') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_operator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkOperator') }})
    os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    other_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherAccounts') }})
    owner_type: Optional[DeviceOwnerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerType') }})
    release_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    security_patch_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPatchTime') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    wifi_mac_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacAddresses') }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceInput:
    r"""DeviceInput
    A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
    """
    
    android_specific_attributes: Optional[shared_androidattributes.AndroidAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSpecificAttributes') }})
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTag') }})
    client_types: Optional[list[DeviceClientTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTypes') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    endpoint_verification_specific_attributes: Optional[shared_endpointverificationspecificattributes.EndpointVerificationSpecificAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointVerificationSpecificAttributes') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    last_sync_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    wifi_mac_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacAddresses') }})
    
