import { SpeakeasyBase } from "../../../internal/utils";
export declare class FxSummary extends SpeakeasyBase {
    creationDateTime: Date;
    /**
     * Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
     */
    fundingStatus: string;
    invertedRate: number;
    /**
     * ISO-4217 3 character currency code
     */
    paymentCurrency?: string;
    quoteId: string;
    rate: number;
    /**
     * ISO-4217 3 character currency code
     */
    sourceCurrency?: string;
    /**
     * Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED
     */
    status: string;
    totalCost: number;
    totalPaymentAmount: number;
}
