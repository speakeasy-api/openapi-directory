import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines the length of stay in nights for which this rate plan can be booked.
 */
export declare class RatePlanRestrictionsLengthOfStay extends SpeakeasyBase {
    /**
     * The maximum number of nights (inclusive) a guest can stay to be eligible for this rate plan.
     */
    max?: number;
    /**
     * The minimum number of nights (inclusive) a guest has to stay to be eligible for this rate plan.
     */
    min: number;
}
/**
 * Restrictions that apply to this rate plan.
 */
export declare class RatePlanRestrictions extends SpeakeasyBase {
    /**
     * Determines the length of stay in nights for which this rate plan can be booked.
     */
    lengthOfStay: RatePlanRestrictionsLengthOfStay;
}
