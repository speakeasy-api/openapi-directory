import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuoteFxSummaryV3 extends SpeakeasyBase {
    /**
     * Timestamp of when the quote was created
     */
    creationTime: Date;
    /**
     * The timestamp for when the quote will expire
     */
    expiryTime?: Date;
    /**
     * Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED
     */
    fundingStatus: string;
    /**
     * The inverse conversion rate (from paymnent currency to source currency)
     */
    invertedRate?: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    paymentCurrency: string;
    /**
     * The id of the created quote
     */
    quoteId: string;
    /**
     * The conversion rate (from the source currency to the payment currency)
     */
    rate: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    sourceCurrency: string;
    /**
     * Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED
     */
    status: string;
    /**
     * The amount (in minor units) that the payee will receive
     */
    totalPaymentAmount: number;
    /**
     * The amount (in minor units) that will be paid from the source account
     */
    totalSourceAmount: number;
}
