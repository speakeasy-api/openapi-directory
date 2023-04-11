import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data specific to web streams.
 */
export declare class GoogleAnalyticsAdminV1betaDataStreamWebStreamData extends SpeakeasyBase {
    /**
     * Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
     */
    defaultUri?: string;
    /**
     * Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
     */
    firebaseAppId?: string;
    /**
     * Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"
     */
    measurementId?: string;
}
/**
 * Data specific to web streams.
 */
export declare class GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput extends SpeakeasyBase {
    /**
     * Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
     */
    defaultUri?: string;
}
