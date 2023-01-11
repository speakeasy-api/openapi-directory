import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappscloudidentitydevicesv1androidattributes as shared_googleappscloudidentitydevicesv1androidattributes

class GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum(str, Enum):
    COMPROMISED_STATE_UNSPECIFIED = "COMPROMISED_STATE_UNSPECIFIED"
    COMPROMISED = "COMPROMISED"
    UNCOMPROMISED = "UNCOMPROMISED"

class GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    GOOGLE_SYNC = "GOOGLE_SYNC"
    WINDOWS = "WINDOWS"
    MAC_OS = "MAC_OS"
    LINUX = "LINUX"
    CHROME_OS = "CHROME_OS"

class GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum(str, Enum):
    ENCRYPTION_STATE_UNSPECIFIED = "ENCRYPTION_STATE_UNSPECIFIED"
    UNSUPPORTED_BY_DEVICE = "UNSUPPORTED_BY_DEVICE"
    ENCRYPTED = "ENCRYPTED"
    NOT_ENCRYPTED = "NOT_ENCRYPTED"

class GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum(str, Enum):
    MANAGEMENT_STATE_UNSPECIFIED = "MANAGEMENT_STATE_UNSPECIFIED"
    APPROVED = "APPROVED"
    BLOCKED = "BLOCKED"
    PENDING = "PENDING"
    UNPROVISIONED = "UNPROVISIONED"
    WIPING = "WIPING"
    WIPED = "WIPED"

class GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum(str, Enum):
    DEVICE_OWNERSHIP_UNSPECIFIED = "DEVICE_OWNERSHIP_UNSPECIFIED"
    COMPANY = "COMPANY"
    BYOD = "BYOD"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1Device:
    r"""GoogleAppsCloudidentityDevicesV1Device
     A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
    """
    
    android_specific_attributes: Optional[shared_googleappscloudidentitydevicesv1androidattributes.GoogleAppsCloudidentityDevicesV1AndroidAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSpecificAttributes') }})
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTag') }})
    baseband_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basebandVersion') }})
    bootloader_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootloaderVersion') }})
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    build_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildNumber') }})
    compromised_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compromisedState') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_type: Optional[GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    enabled_developer_options: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledDeveloperOptions') }})
    enabled_usb_debugging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledUsbDebugging') }})
    encryption_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionState') }})
    imei: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imei') }})
    kernel_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelVersion') }})
    last_sync_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    management_state: Optional[GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementState') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    meid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meid') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_operator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkOperator') }})
    os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    other_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherAccounts') }})
    owner_type: Optional[GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerType') }})
    release_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    security_patch_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPatchTime') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    wifi_mac_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacAddresses') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1DeviceInput:
    r"""GoogleAppsCloudidentityDevicesV1DeviceInput
     A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
    """
    
    android_specific_attributes: Optional[shared_googleappscloudidentitydevicesv1androidattributes.GoogleAppsCloudidentityDevicesV1AndroidAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSpecificAttributes') }})
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTag') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    last_sync_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSyncTime') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    wifi_mac_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacAddresses') }})
    
