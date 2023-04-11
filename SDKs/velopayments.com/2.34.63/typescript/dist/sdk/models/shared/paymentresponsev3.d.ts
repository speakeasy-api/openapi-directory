import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponseV3 } from "./paymenteventresponsev3";
/**
 * 200 response, request completed okay
 */
export declare class PaymentResponseV3 extends SpeakeasyBase {
    accountName?: string;
    /**
     * The account number for the account which will receive the payment.
     */
    accountNumber?: string;
    /**
     * The country code of the payment channel.
     */
    countryCode?: string;
    events: PaymentEventResponseV3[];
    /**
     * ACH file payment was submitted in, if applicable
     */
    filenameReference?: string;
    /**
     * The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED
     */
    fundingStatus: string;
    /**
     * The iban for the payment.
     */
    iban?: string;
    /**
     * Individual Identification Number assigned to the payment in the ACH file, if applicable
     */
    individualIdentificationNumber?: string;
    /**
     * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
     */
    invertedRate?: number;
    /**
     * The id of the paymeee
     */
    payeeId: string;
    /**
     * The amount which the payee will receive
     */
    paymentAmount: number;
    paymentChannelId?: string;
    paymentChannelName?: string;
    /**
     * ISO 3 character currency code
     */
    paymentCurrency?: string;
    /**
     * The id of the payment
     */
    paymentId: string;
    /**
     * The payment memo set by the payor
     */
    paymentMemo?: string;
    paymentScheme?: string;
    /**
     * The id of the payor
     */
    payorId: string;
    /**
     * The name of the payor
     */
    payorName?: string;
    payorPaymentId?: string;
    /**
     * The quote Id used for the FX
     */
    quoteId: string;
    railsBatchId?: string;
    /**
     * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
     */
    railsId: string;
    railsPaymentId?: string;
    /**
     * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
     */
    rate?: number;
    rejectionReason?: string;
    /**
     * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
     */
    remoteId?: string;
    /**
     * The return cost if a returned payment.
     */
    returnCost?: number;
    returnReason?: string;
    /**
     * The routing number for the payment.
     */
    routingNumber?: string;
    /**
     * The id of the source account from which the payment was taken
     */
    sourceAccountId: string;
    /**
     * The name of the source account from which the payment was taken
     */
    sourceAccountName?: string;
    /**
     * The source amount for the payment (amount debited to make the payment)
     */
    sourceAmount?: number;
    /**
     * ISO 3 character currency code
     */
    sourceCurrency?: string;
    /**
     * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN
     */
    status: string;
    submittedDateTime: Date;
    /**
     * Trace Number assigned to the payment in the ACH file, if applicable
     */
    traceNumber?: string;
}
