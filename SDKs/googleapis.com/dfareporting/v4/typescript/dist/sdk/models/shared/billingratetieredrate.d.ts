import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillingRateTieredRate extends SpeakeasyBase {
    /**
     * The maximum for this tier range.
     */
    highValue?: string;
    /**
     * The minimum for this tier range.
     */
    lowValue?: string;
    /**
     * Rate in micros for this tier.
     */
    rateInMicros?: string;
}
