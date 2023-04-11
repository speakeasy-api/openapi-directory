import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponse } from "./paymenteventresponse";
import { PaymentResponseV4Payout } from "./paymentresponsev4payout";
import { PayoutSchedule } from "./payoutschedule";
import { PostInstructFxInfo } from "./postinstructfxinfo";
/**
 * 200 response, request completed okay
 */
export declare class PaymentResponseV4 extends SpeakeasyBase {
    accountName?: string;
    /**
     * The account number for the account which will receive the payment.
     */
    accountNumber?: string;
    /**
     * Populated with rejection reason code if the payment was withdrawn automatically at instruct time
     */
    autoWithdrawnReasonCode?: string;
    /**
     * The country code of the payment channel.
     */
    countryCode?: string;
    events: PaymentEventResponse[];
    /**
     * ACH file payment was submitted in, if applicable
     */
    filenameReference?: string;
    /**
     * Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
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
    isPaymentCcyBaseCcy?: boolean;
    /**
     * The country code of the payee's address.
     */
    payeeAddressCountryCode?: string;
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
     * ISO-4217 3 character currency code
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
    /**
     * Metadata for the payment
     */
    paymentMetadata?: string;
    paymentScheme?: string;
    paymentTrackingReference?: string;
    /**
     * The id of the payor
     */
    payorId: string;
    /**
     * The name of the payor
     */
    payorName?: string;
    payorPaymentId?: string;
    payout?: PaymentResponseV4Payout;
    /**
     * FX details relating to a payout that was executed or is still waiting to be executed
     */
    postInstructFxInfo?: PostInstructFxInfo;
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
     * The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments.
     */
    remoteSystemId?: string;
    /**
     * The id of the payment in the remote system. Not populated for normal Velo payments.
     */
    remoteSystemPaymentId?: string;
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
     * Details relating to a payout that was executed via a schedule or is still waiting to be executed
     */
    schedule?: PayoutSchedule;
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
     * ISO-4217 3 character currency code
     */
    sourceCurrency?: string;
    /**
     * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN
     */
    status: string;
    submittedDateTime: Date;
    /**
     * Trace Number assigned to the payment in the ACH file, if applicable
     */
    traceNumber?: string;
    /**
     * The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO
     */
    transmissionType?: string;
    withdrawable?: boolean;
    withdrawnReason?: string;
}
