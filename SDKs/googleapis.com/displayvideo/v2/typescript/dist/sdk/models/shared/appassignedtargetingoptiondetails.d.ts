import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID.
 */
export declare enum AppAssignedTargetingOptionDetailsAppPlatformEnum {
    AppPlatformUnspecified = "APP_PLATFORM_UNSPECIFIED",
    AppPlatformIos = "APP_PLATFORM_IOS",
    AppPlatformAndroid = "APP_PLATFORM_ANDROID",
    AppPlatformRoku = "APP_PLATFORM_ROKU",
    AppPlatformAmazonFiretv = "APP_PLATFORM_AMAZON_FIRETV",
    AppPlatformPlaystation = "APP_PLATFORM_PLAYSTATION",
    AppPlatformAppleTv = "APP_PLATFORM_APPLE_TV",
    AppPlatformXbox = "APP_PLATFORM_XBOX",
    AppPlatformSamsungTv = "APP_PLATFORM_SAMSUNG_TV",
    AppPlatformAndroidTv = "APP_PLATFORM_ANDROID_TV",
    AppPlatformGenericCtv = "APP_PLATFORM_GENERIC_CTV"
}
/**
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
 */
export declare class AppAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`.
     */
    appId?: string;
    /**
     * Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID.
     */
    appPlatform?: AppAssignedTargetingOptionDetailsAppPlatformEnum;
    /**
     * Output only. The display name of the app.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
}
/**
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
 */
export declare class AppAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`.
     */
    appId?: string;
    /**
     * Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID.
     */
    appPlatform?: AppAssignedTargetingOptionDetailsAppPlatformEnum;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
}
