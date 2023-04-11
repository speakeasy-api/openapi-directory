import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pricing Period
 */
export declare class PricingSchedulePricingPeriod extends SpeakeasyBase {
    endDate?: Date;
    /**
     * Comments for this pricing period.
     */
    pricingComment?: string;
    /**
     * Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.
     */
    rateOrCostNanos?: string;
    startDate?: Date;
    /**
     * Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.
     */
    units?: string;
}
