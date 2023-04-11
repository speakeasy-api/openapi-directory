import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Platform where the application is running.
 */
export declare enum GoogleMapsUnityClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}
/**
 * Client information.
 */
export declare class GoogleMapsUnityClientInfo extends SpeakeasyBase {
    /**
     * API client name and version. For example, the SDK calling the API. The exact format is up to the client.
     */
    apiClient?: string;
    /**
     * Application ID, such as the package name on Android and the bundle identifier on iOS platforms.
     */
    applicationId?: string;
    /**
     * Application version number, such as "1.2.3". The exact format is application-dependent.
     */
    applicationVersion?: string;
    /**
     * Device model as reported by the device. The exact format is platform-dependent.
     */
    deviceModel?: string;
    /**
     * Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.
     */
    operatingSystem?: string;
    /**
     * Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS.
     */
    operatingSystemBuild?: string;
    /**
     * Platform where the application is running.
     */
    platform?: GoogleMapsUnityClientInfoPlatformEnum;
}
