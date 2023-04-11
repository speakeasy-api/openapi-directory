import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data specific to Android app streams.
 */
export declare class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData extends SpeakeasyBase {
    /**
     * Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
     */
    firebaseAppId?: string;
    /**
     * Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
     */
    packageName?: string;
}
/**
 * Data specific to Android app streams.
 */
export declare class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput extends SpeakeasyBase {
    /**
     * Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
     */
    packageName?: string;
}
