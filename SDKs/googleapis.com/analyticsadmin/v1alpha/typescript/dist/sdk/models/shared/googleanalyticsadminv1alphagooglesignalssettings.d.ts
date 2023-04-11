import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Terms of Service acceptance.
 */
export declare enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum {
    GoogleSignalsConsentUnspecified = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED",
    GoogleSignalsConsentConsented = "GOOGLE_SIGNALS_CONSENT_CONSENTED",
    GoogleSignalsConsentNotConsented = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED"
}
/**
 * Status of this setting.
 */
export declare enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum {
    GoogleSignalsStateUnspecified = "GOOGLE_SIGNALS_STATE_UNSPECIFIED",
    GoogleSignalsEnabled = "GOOGLE_SIGNALS_ENABLED",
    GoogleSignalsDisabled = "GOOGLE_SIGNALS_DISABLED"
}
/**
 * Settings values for Google Signals. This is a singleton resource.
 */
export declare class GoogleAnalyticsAdminV1alphaGoogleSignalsSettings extends SpeakeasyBase {
    /**
     * Output only. Terms of Service acceptance.
     */
    consent?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum;
    /**
     * Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     */
    name?: string;
    /**
     * Status of this setting.
     */
    state?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum;
}
