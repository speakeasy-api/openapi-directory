import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. How the app was installed.
 */
export declare enum GoogleChromeManagementV1InstalledAppAppInstallTypeEnum {
    AppInstallTypeUnspecified = "APP_INSTALL_TYPE_UNSPECIFIED",
    Multiple = "MULTIPLE",
    Normal = "NORMAL",
    Admin = "ADMIN",
    Development = "DEVELOPMENT",
    Sideload = "SIDELOAD",
    Other = "OTHER"
}
/**
 * Output only. Source of the installed app.
 */
export declare enum GoogleChromeManagementV1InstalledAppAppSourceEnum {
    AppSourceUnspecified = "APP_SOURCE_UNSPECIFIED",
    ChromeWebstore = "CHROME_WEBSTORE",
    PlayStore = "PLAY_STORE"
}
/**
 * Output only. Type of the app.
 */
export declare enum GoogleChromeManagementV1InstalledAppAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}
/**
 * Describes an installed app.
 */
export declare class GoogleChromeManagementV1InstalledApp extends SpeakeasyBase {
    /**
     * Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string;
    /**
     * Output only. How the app was installed.
     */
    appInstallType?: GoogleChromeManagementV1InstalledAppAppInstallTypeEnum;
    /**
     * Output only. Source of the installed app.
     */
    appSource?: GoogleChromeManagementV1InstalledAppAppSourceEnum;
    /**
     * Output only. Type of the app.
     */
    appType?: GoogleChromeManagementV1InstalledAppAppTypeEnum;
    /**
     * Output only. Count of browser devices with this app installed.
     */
    browserDeviceCount?: string;
    /**
     * Output only. Description of the installed app.
     */
    description?: string;
    /**
     * Output only. Whether the app is disabled.
     */
    disabled?: boolean;
    /**
     * Output only. Name of the installed app.
     */
    displayName?: string;
    /**
     * Output only. Homepage uri of the installed app.
     */
    homepageUri?: string;
    /**
     * Output only. Count of ChromeOS users with this app installed.
     */
    osUserCount?: string;
    /**
     * Output only. Permissions of the installed app.
     */
    permissions?: string[];
}
