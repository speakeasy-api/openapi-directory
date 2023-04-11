import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the reason for the cancellation.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum {
    CancellationReasonUnspecified = "CANCELLATION_REASON_UNSPECIFIED",
    CancellationReasonFraud = "CANCELLATION_REASON_FRAUD",
    CancellationReasonRemorse = "CANCELLATION_REASON_REMORSE",
    CancellationReasonAccidentalPurchase = "CANCELLATION_REASON_ACCIDENTAL_PURCHASE",
    CancellationReasonPastDue = "CANCELLATION_REASON_PAST_DUE",
    CancellationReasonAccountClosed = "CANCELLATION_REASON_ACCOUNT_CLOSED",
    CancellationReasonUpgradeDowngrade = "CANCELLATION_REASON_UPGRADE_DOWNGRADE",
    CancellationReasonUserDelinquency = "CANCELLATION_REASON_USER_DELINQUENCY",
    CancellationReasonOther = "CANCELLATION_REASON_OTHER"
}
export declare class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest extends SpeakeasyBase {
    /**
     * Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund.
     */
    cancelImmediately?: boolean;
    /**
     * Specifies the reason for the cancellation.
     */
    cancellationReason?: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
}
