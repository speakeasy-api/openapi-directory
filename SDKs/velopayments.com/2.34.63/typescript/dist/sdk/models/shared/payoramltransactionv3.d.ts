import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Export Transactions response
 */
export declare class PayorAmlTransactionV3 extends SpeakeasyBase {
    credit?: number;
    /**
     * ISO 4217 3 character currency code
     */
    creditCurrency?: string;
    dateFundingRequested?: string;
    debit?: number;
    /**
     * ISO 4217 3 character currency code
     */
    debitCurrency?: string;
    fundingType?: string;
    fxApplied?: number;
    payeeType?: string;
    paymentAmount?: number;
    /**
     * ISO 4217 3 character currency code
     */
    paymentCurrency?: string;
    paymentMemo?: string;
    paymentRails?: string;
    paymentStatus?: string;
    payorPaymentId?: string;
    rejectReason?: string;
    /**
     * Remote ID of the Payee, set by Payor
     */
    remoteId?: string;
    reportTransactionType?: string;
    returnCode?: string;
    returnDescription?: string;
    returnFee?: string;
    /**
     * ISO 4217 3 character currency code
     */
    returnFeeCurrency?: string;
    returnFeeDescription?: string;
    sourceAccount?: string;
    transactionDate?: Date;
    transactionTime?: string;
}
