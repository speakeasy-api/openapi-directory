import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of cancellation policy applicable to the rate
 */
export declare enum ConditionsCancellationPolicyEnum {
    FreeCancellation = "FREE_CANCELLATION",
    FreeCancellation24 = "FREE_CANCELLATION_24",
    FreeCancellation48 = "FREE_CANCELLATION_48",
    FreeCancellationWeek = "FREE_CANCELLATION_WEEK",
    NonRefundable = "NON_REFUNDABLE",
    Null = "null"
}
/**
 * Conditions described by the rate plan.
 */
export declare class Conditions extends SpeakeasyBase {
    cancellationDeadline: number;
    /**
     * Type of cancellation policy applicable to the rate
     */
    cancellationPolicy: ConditionsCancellationPolicyEnum;
}
