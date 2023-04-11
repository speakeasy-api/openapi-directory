import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mobile app promoted by a mobile app install line item.
 */
export declare class MobileAppInput extends SpeakeasyBase {
    /**
     * Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`.
     */
    appId?: string;
}
/**
 * Output only. The app platform.
 */
export declare enum MobileAppPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID"
}
/**
 * A mobile app promoted by a mobile app install line item.
 */
export declare class MobileApp extends SpeakeasyBase {
    /**
     * Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`.
     */
    appId?: string;
    /**
     * Output only. The app name.
     */
    displayName?: string;
    /**
     * Output only. The app platform.
     */
    platform?: MobileAppPlatformEnum;
    /**
     * Output only. The app publisher.
     */
    publisher?: string;
}
