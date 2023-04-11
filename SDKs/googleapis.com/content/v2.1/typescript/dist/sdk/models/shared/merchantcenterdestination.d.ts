import { SpeakeasyBase } from "../../../internal/utils";
import { AttributionSettings, AttributionSettingsInput } from "./attributionsettings";
/**
 * "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created.
 */
export declare class MerchantCenterDestinationInput extends SpeakeasyBase {
    /**
     * Represents attribution settings for conversion sources receiving pre-attribution data.
     */
    attributionSettings?: AttributionSettingsInput;
    /**
     * Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center.
     */
    currencyCode?: string;
    /**
     * Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters.
     */
    displayName?: string;
}
/**
 * "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created.
 */
export declare class MerchantCenterDestination extends SpeakeasyBase {
    /**
     * Represents attribution settings for conversion sources receiving pre-attribution data.
     */
    attributionSettings?: AttributionSettings;
    /**
     * Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center.
     */
    currencyCode?: string;
    /**
     * Output only. Merchant Center Destination ID.
     */
    destinationId?: string;
    /**
     * Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters.
     */
    displayName?: string;
}
