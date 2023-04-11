import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a fixed time period.
 */
export declare class RepricingRuleEffectiveTimeFixedTimePeriod extends SpeakeasyBase {
    /**
     * The end time (exclusive) of the period. It can only be hour granularity.
     */
    endTime?: string;
    /**
     * The start time (inclusive) of the period. It can only be hour granularity.
     */
    startTime?: string;
}
