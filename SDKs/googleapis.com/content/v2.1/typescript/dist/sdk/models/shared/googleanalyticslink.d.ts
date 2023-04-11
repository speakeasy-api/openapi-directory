import { SpeakeasyBase } from "../../../internal/utils";
import { AttributionSettings, AttributionSettingsInput } from "./attributionsettings";
/**
 * "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account.
 */
export declare class GoogleAnalyticsLinkInput extends SpeakeasyBase {
    /**
     * Represents attribution settings for conversion sources receiving pre-attribution data.
     */
    attributionSettings?: AttributionSettingsInput;
    /**
     * Required. Immutable. ID of the Google Analytics property the merchant is linked to.
     */
    propertyId?: string;
}
/**
 * "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account.
 */
export declare class GoogleAnalyticsLink extends SpeakeasyBase {
    /**
     * Represents attribution settings for conversion sources receiving pre-attribution data.
     */
    attributionSettings?: AttributionSettings;
    /**
     * Required. Immutable. ID of the Google Analytics property the merchant is linked to.
     */
    propertyId?: string;
    /**
     * Output only. Name of the Google Analytics property the merchant is linked to.
     */
    propertyName?: string;
}
