import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutPayor } from "./payoutpayor";
import { PayoutPrincipal } from "./payoutprincipal";
import { PayoutSchedule } from "./payoutschedule";
export declare class GetPaymentsForPayoutResponseV4Summary extends SpeakeasyBase {
    /**
     * The count of payments within the payout which have been confirmed.
     */
    confirmedPayments?: number;
    /**
     * The count of payments within the payout which are incomplete.
     */
    incompletePayments?: number;
    /**
     * Details of principal participating in a payout.
     */
    instructed?: PayoutPrincipal;
    /**
     * The date/time at which the payout was instructed.
     */
    instructedDateTime?: Date;
    /**
     * Details of payor and principal participating in a payout.
     */
    payoutFrom?: PayoutPayor;
    /**
     * The memo attached to the payout.
     */
    payoutMemo?: string;
    /**
     * Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
     */
    payoutStatus?: string;
    /**
     * Details of payor and principal participating in a payout.
     */
    payoutTo?: PayoutPayor;
    /**
     * The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF
     */
    payoutType?: string;
    /**
     * Details of principal participating in a payout.
     */
    quoted?: PayoutPrincipal;
    /**
     * The date/time at which the payout was quoted.
     */
    quotedDateTime?: Date;
    /**
     * The count of payments within the payout which have been released.
     */
    releasedPayments?: number;
    /**
     * The count of payments within the payout which have been returned.
     */
    returnedPayments?: number;
    /**
     * Details relating to a payout that was executed via a schedule or is still waiting to be executed
     */
    schedule?: PayoutSchedule;
    /**
     * The date/time at which the payout was submitted.
     */
    submittedDateTime?: Date;
    /**
     * Details of payor and principal participating in a payout.
     */
    submitting?: PayoutPayor;
    /**
     * The count of payments within the payout.
     */
    totalPayments?: number;
    /**
     * Details of principal participating in a payout.
     */
    withdrawn?: PayoutPrincipal;
    withdrawnDateTime?: Date;
    /**
     * The count of payments within the payout which have been withdrawn.
     */
    withdrawnPayments?: number;
}
