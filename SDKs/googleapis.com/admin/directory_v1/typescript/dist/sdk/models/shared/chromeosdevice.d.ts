import { SpeakeasyBase } from "../../../internal/utils";
import { OsUpdateStatus } from "./osupdatestatus";
export declare class ChromeOsDeviceActiveTimeRanges extends SpeakeasyBase {
    /**
     * Duration of usage in milliseconds.
     */
    activeTime?: number;
    /**
     * Date of usage
     */
    date?: Date;
}
/**
 * Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.
 */
export declare class ChromeOsDeviceCpuInfoLogicalCpusCStates extends SpeakeasyBase {
    /**
     * Name of the state.
     */
    displayName?: string;
    /**
     * Time spent in the state since the last reboot.
     */
    sessionDuration?: string;
}
/**
 * Status of a single logical CPU.
 */
export declare class ChromeOsDeviceCpuInfoLogicalCpus extends SpeakeasyBase {
    /**
     * C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.
     */
    cStates?: ChromeOsDeviceCpuInfoLogicalCpusCStates[];
    /**
     * Current frequency the CPU is running at.
     */
    currentScalingFrequencyKhz?: number;
    /**
     * Idle time since last boot.
     */
    idleDuration?: string;
    /**
     * Maximum frequency the CPU is allowed to run at, by policy.
     */
    maxScalingFrequencyKhz?: number;
}
/**
 * CPU specs for a CPU.
 */
export declare class ChromeOsDeviceCpuInfo extends SpeakeasyBase {
    /**
     * The CPU architecture.
     */
    architecture?: string;
    /**
     * Information for the Logical CPUs
     */
    logicalCpus?: ChromeOsDeviceCpuInfoLogicalCpus[];
    /**
     * The max CPU clock speed in kHz.
     */
    maxClockSpeedKhz?: number;
    /**
     * The CPU model name.
     */
    model?: string;
}
export declare class ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo extends SpeakeasyBase {
    /**
     * CPU label
     */
    label?: string;
    /**
     * Temperature in Celsius degrees.
     */
    temperature?: number;
}
export declare class ChromeOsDeviceCpuStatusReports extends SpeakeasyBase {
    /**
     * A list of CPU temperature samples.
     */
    cpuTemperatureInfo?: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];
    cpuUtilizationPercentageInfo?: number[];
    /**
     * Date and time the report was received.
     */
    reportTime?: Date;
}
/**
 * (Read-only) Deprovision reason.
 */
export declare enum ChromeOsDeviceDeprovisionReasonEnum {
    DeprovisionReasonUnspecified = "deprovisionReasonUnspecified",
    DeprovisionReasonSameModelReplacement = "deprovisionReasonSameModelReplacement",
    DeprovisionReasonUpgrade = "deprovisionReasonUpgrade",
    DeprovisionReasonDomainMove = "deprovisionReasonDomainMove",
    DeprovisionReasonServiceExpiration = "deprovisionReasonServiceExpiration",
    DeprovisionReasonOther = "deprovisionReasonOther",
    DeprovisionReasonDifferentModelReplacement = "deprovisionReasonDifferentModelReplacement",
    DeprovisionReasonRetiringDevice = "deprovisionReasonRetiringDevice",
    DeprovisionReasonUpgradeTransfer = "deprovisionReasonUpgradeTransfer",
    DeprovisionReasonNotRequired = "deprovisionReasonNotRequired",
    DeprovisionReasonRepairCenter = "deprovisionReasonRepairCenter"
}
export declare class ChromeOsDeviceDeviceFiles extends SpeakeasyBase {
    /**
     * Date and time the file was created
     */
    createTime?: Date;
    /**
     * File download URL
     */
    downloadUrl?: string;
    /**
     * File name
     */
    name?: string;
    /**
     * File type
     */
    type?: string;
}
export declare class ChromeOsDeviceDiskVolumeReportsVolumeInfo extends SpeakeasyBase {
    /**
     * Free disk space [in bytes]
     */
    storageFree?: string;
    /**
     * Total disk space [in bytes]
     */
    storageTotal?: string;
    /**
     * Volume id
     */
    volumeId?: string;
}
export declare class ChromeOsDeviceDiskVolumeReports extends SpeakeasyBase {
    /**
     * Disk volumes
     */
    volumeInfo?: ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
}
/**
 * Information for an ip address.
 */
export declare class ChromeOsDeviceLastKnownNetwork extends SpeakeasyBase {
    /**
     * The IP address.
     */
    ipAddress?: string;
    /**
     * The WAN IP address.
     */
    wanIpAddress?: string;
}
/**
 * A list of recent device users, in descending order, by last login time.
 */
export declare class ChromeOsDeviceRecentUsers extends SpeakeasyBase {
    /**
     * The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.
     */
    email?: string;
    /**
     * The type of the user.
     */
    type?: string;
}
export declare class ChromeOsDeviceScreenshotFiles extends SpeakeasyBase {
    /**
     * Date and time the file was created
     */
    createTime?: Date;
    /**
     * File download URL
     */
    downloadUrl?: string;
    /**
     * File name
     */
    name?: string;
    /**
     * File type
     */
    type?: string;
}
export declare class ChromeOsDeviceSystemRamFreeReports extends SpeakeasyBase {
    /**
     * Date and time the report was received.
     */
    reportTime?: Date;
    systemRamFreeInfo?: string[];
}
/**
 * Trusted Platform Module (TPM) (Read-only)
 */
export declare class ChromeOsDeviceTpmVersionInfo extends SpeakeasyBase {
    /**
     * TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000
     */
    family?: string;
    /**
     * TPM firmware version.
     */
    firmwareVersion?: string;
    /**
     * TPM manufacturer code.
     */
    manufacturer?: string;
    /**
     * TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.
     */
    specLevel?: string;
    /**
     * TPM model number.
     */
    tpmModel?: string;
    /**
     * Vendor-specific information such as Vendor ID.
     */
    vendorSpecific?: string;
}
/**
 * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
 */
export declare class ChromeOsDevice extends SpeakeasyBase {
    /**
     * A list of active time ranges (Read-only).
     */
    activeTimeRanges?: ChromeOsDeviceActiveTimeRanges[];
    /**
     * The asset identifier as noted by an administrator or specified during enrollment.
     */
    annotatedAssetId?: string;
    /**
     * The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.
     */
    annotatedLocation?: string;
    /**
     * The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.
     */
    annotatedUser?: string;
    /**
     * (Read-only) The timestamp after which the device will stop receiving Chrome updates or support
     */
    autoUpdateExpiration?: string;
    /**
     * The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).
     */
    bootMode?: string;
    /**
     * Information regarding CPU specs in the device.
     */
    cpuInfo?: ChromeOsDeviceCpuInfo[];
    /**
     * Reports of CPU utilization and temperature (Read-only)
     */
    cpuStatusReports?: ChromeOsDeviceCpuStatusReports[];
    /**
     * (Read-only) Deprovision reason.
     */
    deprovisionReason?: ChromeOsDeviceDeprovisionReasonEnum;
    /**
     * A list of device files to download (Read-only)
     */
    deviceFiles?: ChromeOsDeviceDeviceFiles[];
    /**
     * The unique ID of the Chrome device.
     */
    deviceId?: string;
    /**
     * Reports of disk space and other info about mounted/connected volumes.
     */
    diskVolumeReports?: ChromeOsDeviceDiskVolumeReports[];
    /**
     * (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
     */
    dockMacAddress?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The device's MAC address on the ethernet network interface.
     */
    ethernetMacAddress?: string;
    /**
     * (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
     */
    ethernetMacAddress0?: string;
    /**
     * The Chrome device's firmware version.
     */
    firmwareVersion?: string;
    /**
     * Date and time for the first time the device was enrolled.
     */
    firstEnrollmentTime?: string;
    /**
     * The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.
     */
    kind?: string;
    /**
     * (Read-only) Date and time for the last deprovision of the device.
     */
    lastDeprovisionTimestamp?: string;
    /**
     * Date and time the device was last enrolled (Read-only)
     */
    lastEnrollmentTime?: Date;
    /**
     * Contains last known network (Read-only)
     */
    lastKnownNetwork?: ChromeOsDeviceLastKnownNetwork[];
    /**
     * Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    lastSync?: Date;
    /**
     * The device's wireless MAC address. If the device does not have this information, it is not included in the response.
     */
    macAddress?: string;
    /**
     * (Read-only) The date the device was manufactured in yyyy-mm-dd format.
     */
    manufactureDate?: string;
    /**
     * The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).
     */
    meid?: string;
    /**
     * The device's model information. If the device does not have this information, this property is not included in the response.
     */
    model?: string;
    /**
     * Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.
     */
    notes?: string;
    /**
     * The device's order number. Only devices directly purchased from Google have an order number.
     */
    orderNumber?: string;
    /**
     * The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).
     */
    orgUnitId?: string;
    /**
     * The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).
     */
    orgUnitPath?: string;
    /**
     * Contains information regarding the current OS update status.
     */
    osUpdateStatus?: OsUpdateStatus;
    /**
     * The Chrome device's operating system version.
     */
    osVersion?: string;
    /**
     * The Chrome device's platform version.
     */
    platformVersion?: string;
    /**
     * A list of recent device users, in descending order, by last login time.
     */
    recentUsers?: ChromeOsDeviceRecentUsers[];
    /**
     * A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)
     */
    screenshotFiles?: ChromeOsDeviceScreenshotFiles[];
    /**
     * The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.
     */
    serialNumber?: string;
    /**
     * The status of the device.
     */
    status?: string;
    /**
     * Final date the device will be supported (Read-only)
     */
    supportEndDate?: Date;
    /**
     * Reports of amounts of available RAM memory (Read-only)
     */
    systemRamFreeReports?: ChromeOsDeviceSystemRamFreeReports[];
    /**
     * Total RAM on the device [in bytes] (Read-only)
     */
    systemRamTotal?: string;
    /**
     * Trusted Platform Module (TPM) (Read-only)
     */
    tpmVersionInfo?: ChromeOsDeviceTpmVersionInfo;
    /**
     * Determines if the device will auto renew its support after the support end date. This is a read-only property.
     */
    willAutoRenew?: boolean;
}
