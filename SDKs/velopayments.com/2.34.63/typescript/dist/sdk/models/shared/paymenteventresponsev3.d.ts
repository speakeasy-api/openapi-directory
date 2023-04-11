import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentEventResponseV3 extends SpeakeasyBase {
    accountName?: string;
    /**
     * The account number attached to the event.
     */
    accountNumber?: string;
    /**
     * The date/time at which the event occurred.
     */
    eventDateTime: Date;
    /**
     * The id of the event.
     */
    eventId: string;
    /**
     * The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN
     */
    eventType: string;
    iban?: string;
    /**
     * The destination amount exposed by the event.
     */
    paymentAmount?: number;
    /**
     * ISO 3 character currency code
     */
    paymentCurrency?: string;
    principal?: string;
    /**
     * The routing number attached to the event.
     */
    routingNumber?: string;
    /**
     * The source amount exposed by the event.
     */
    sourceAmount?: number;
    /**
     * ISO 3 character currency code
     */
    sourceCurrency?: string;
}
