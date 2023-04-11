import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A secret value used for sending hits to Measurement Protocol.
 */
export declare class GoogleAnalyticsAdminV1betaMeasurementProtocolSecret extends SpeakeasyBase {
    /**
     * Required. Human-readable display name for this secret.
     */
    displayName?: string;
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     */
    name?: string;
    /**
     * Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.
     */
    secretValue?: string;
}
/**
 * A secret value used for sending hits to Measurement Protocol.
 */
export declare class GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput extends SpeakeasyBase {
    /**
     * Required. Human-readable display name for this secret.
     */
    displayName?: string;
}
