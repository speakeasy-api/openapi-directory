import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
 */
export declare class GoogleCloudRetailV2alphaConditionTimeRange extends SpeakeasyBase {
    /**
     * End of time range. Range is inclusive.
     */
    endTime?: string;
    /**
     * Start of time range. Range is inclusive.
     */
    startTime?: string;
}
