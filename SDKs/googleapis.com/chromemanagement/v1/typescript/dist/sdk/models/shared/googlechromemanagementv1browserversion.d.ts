import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The release channel of the installed browser.
 */
export declare enum GoogleChromeManagementV1BrowserVersionChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED",
    Canary = "CANARY",
    Dev = "DEV",
    Beta = "BETA",
    Stable = "STABLE"
}
/**
 * Output only. The device operating system.
 */
export declare enum GoogleChromeManagementV1BrowserVersionSystemEnum {
    DeviceSystemUnspecified = "DEVICE_SYSTEM_UNSPECIFIED",
    SystemOther = "SYSTEM_OTHER",
    SystemAndroid = "SYSTEM_ANDROID",
    SystemIos = "SYSTEM_IOS",
    SystemCros = "SYSTEM_CROS",
    SystemWindows = "SYSTEM_WINDOWS",
    SystemMac = "SYSTEM_MAC",
    SystemLinux = "SYSTEM_LINUX"
}
/**
 * Describes a browser version and its install count.
 */
export declare class GoogleChromeManagementV1BrowserVersion extends SpeakeasyBase {
    /**
     * Output only. The release channel of the installed browser.
     */
    channel?: GoogleChromeManagementV1BrowserVersionChannelEnum;
    /**
     * Output only. Count grouped by device_system and major version
     */
    count?: string;
    /**
     * Output only. Version of the system-specified operating system.
     */
    deviceOsVersion?: string;
    /**
     * Output only. The device operating system.
     */
    system?: GoogleChromeManagementV1BrowserVersionSystemEnum;
    /**
     * Output only. The full version of the installed browser.
     */
    version?: string;
}
