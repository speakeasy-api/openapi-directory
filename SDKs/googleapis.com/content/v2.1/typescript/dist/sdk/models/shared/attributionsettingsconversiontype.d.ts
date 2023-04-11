import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing a types of conversion events
 */
export declare class AttributionSettingsConversionType extends SpeakeasyBase {
    /**
     * Output only. Option indicating if the type should be included in Merchant Center reporting.
     */
    includeInReporting?: boolean;
    /**
     * Output only. Conversion event name, as it'll be reported by the client.
     */
    name?: string;
}
