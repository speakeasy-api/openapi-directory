import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1AndroidAttributes } from "./googleappscloudidentitydevicesv1androidattributes";
/**
 * Output only. Represents whether the Device is compromised.
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    Uncompromised = "UNCOMPROMISED"
}
/**
 * Output only. Type of device.
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    GoogleSync = "GOOGLE_SYNC",
    Windows = "WINDOWS",
    MacOs = "MAC_OS",
    Linux = "LINUX",
    ChromeOs = "CHROME_OS"
}
/**
 * Output only. Device encryption state.
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED",
    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE",
    Encrypted = "ENCRYPTED",
    NotEncrypted = "NOT_ENCRYPTED"
}
/**
 * Output only. Management state of the device
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    Pending = "PENDING",
    Unprovisioned = "UNPROVISIONED",
    Wiping = "WIPING",
    Wiped = "WIPED"
}
/**
 * Output only. Whether the device is owned by the company or an individual
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED",
    Company = "COMPANY",
    Byod = "BYOD"
}
/**
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
 */
export declare class GoogleAppsCloudidentityDevicesV1Device extends SpeakeasyBase {
    /**
     * Resource representing the Android specific attributes of a Device.
     */
    androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    /**
     * Asset tag of the device.
     */
    assetTag?: string;
    /**
     * Output only. Baseband version of the device.
     */
    basebandVersion?: string;
    /**
     * Output only. Device bootloader version. Example: 0.6.7.
     */
    bootloaderVersion?: string;
    /**
     * Output only. Device brand. Example: Samsung.
     */
    brand?: string;
    /**
     * Output only. Build number of the device.
     */
    buildNumber?: string;
    /**
     * Output only. Represents whether the Device is compromised.
     */
    compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum;
    /**
     * Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.
     */
    createTime?: string;
    /**
     * Unique identifier for the device.
     */
    deviceId?: string;
    /**
     * Output only. Type of device.
     */
    deviceType?: GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum;
    /**
     * Output only. Whether developer options is enabled on device.
     */
    enabledDeveloperOptions?: boolean;
    /**
     * Output only. Whether USB debugging is enabled on device.
     */
    enabledUsbDebugging?: boolean;
    /**
     * Output only. Device encryption state.
     */
    encryptionState?: GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum;
    /**
     * Output only. IMEI number of device if GSM device; empty otherwise.
     */
    imei?: string;
    /**
     * Output only. Kernel version of the device.
     */
    kernelVersion?: string;
    /**
     * Most recent time when device synced with this service.
     */
    lastSyncTime?: string;
    /**
     * Output only. Management state of the device
     */
    managementState?: GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum;
    /**
     * Output only. Device manufacturer. Example: Motorola.
     */
    manufacturer?: string;
    /**
     * Output only. MEID number of device if CDMA device; empty otherwise.
     */
    meid?: string;
    /**
     * Output only. Model name of device. Example: Pixel 3.
     */
    model?: string;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device.
     */
    name?: string;
    /**
     * Output only. Mobile or network operator of device, if available.
     */
    networkOperator?: string;
    /**
     * Output only. OS version of the device. Example: Android 8.1.0.
     */
    osVersion?: string;
    /**
     * Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".
     */
    otherAccounts?: string[];
    /**
     * Output only. Whether the device is owned by the company or an individual
     */
    ownerType?: GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum;
    /**
     * Output only. OS release version. Example: 6.0.
     */
    releaseVersion?: string;
    /**
     * Output only. OS security patch update time on device.
     */
    securityPatchTime?: string;
    /**
     * Serial Number of device. Example: HT82V1A01076.
     */
    serialNumber?: string;
    /**
     * WiFi MAC addresses of device.
     */
    wifiMacAddresses?: string[];
}
/**
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
 */
export declare class GoogleAppsCloudidentityDevicesV1DeviceInput extends SpeakeasyBase {
    /**
     * Resource representing the Android specific attributes of a Device.
     */
    androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    /**
     * Asset tag of the device.
     */
    assetTag?: string;
    /**
     * Unique identifier for the device.
     */
    deviceId?: string;
    /**
     * Most recent time when device synced with this service.
     */
    lastSyncTime?: string;
    /**
     * Serial Number of device. Example: HT82V1A01076.
     */
    serialNumber?: string;
    /**
     * WiFi MAC addresses of device.
     */
    wifiMacAddresses?: string[];
}
