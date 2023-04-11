import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that control the behavior of a single Floodlight activity config.
 */
export declare class TrackingFloodlightActivityConfig extends SpeakeasyBase {
    /**
     * Required. The ID of the Floodlight activity.
     */
    floodlightActivityId?: string;
    /**
     * Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive.
     */
    postClickLookbackWindowDays?: number;
    /**
     * Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive.
     */
    postViewLookbackWindowDays?: number;
}
