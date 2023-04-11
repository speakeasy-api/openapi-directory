import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data specific to iOS app streams.
 */
export declare class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData extends SpeakeasyBase {
    /**
     * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
     */
    bundleId?: string;
    /**
     * Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
     */
    firebaseAppId?: string;
}
/**
 * Data specific to iOS app streams.
 */
export declare class GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput extends SpeakeasyBase {
    /**
     * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
     */
    bundleId?: string;
}
