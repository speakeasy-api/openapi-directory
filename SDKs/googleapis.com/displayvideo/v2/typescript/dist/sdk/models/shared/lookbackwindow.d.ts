import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how many days into the past to look when determining whether to record a conversion.
 */
export declare class LookbackWindow extends SpeakeasyBase {
    /**
     * Lookback window, in days, from the last time a given user clicked on one of your ads.
     */
    clickDays?: number;
    /**
     * Lookback window, in days, from the last time a given user viewed one of your ads.
     */
    impressionDays?: number;
}
