import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPaymentsForPayoutResponseV3Summary extends SpeakeasyBase {
    /**
     * The count of payments within the payout which have been confirmed.
     */
    confirmedPayments?: number;
    /**
     * The count of payments within the payout which have failed or been returned.
     */
    failedPayments?: number;
    /**
     * The count of payments within the payout which are incomplete.
     */
    incompletePayments?: number;
    /**
     * The date/time at which the payout was instructed.
     */
    instructedDateTime?: Date;
    /**
     * The memo attached to the payout.
     */
    payoutMemo?: string;
    /**
     * The current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
     */
    payoutStatus?: string;
    /**
     * The count of payments within the payout which have been released.
     */
    releasedPayments?: number;
    /**
     * The date/time at which the payout was submitted.
     */
    submittedDateTime?: Date;
    /**
     * The count of payments within the payout.
     */
    totalPayments?: number;
    /**
     * The date/time at which the payout was withdrawn.
     */
    withdrawnDateTime?: Date;
}
