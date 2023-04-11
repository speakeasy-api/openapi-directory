import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Promotion } from "./promotion";
export declare class InvoiceSummary extends SpeakeasyBase {
    /**
     * Summary of the total amounts of the additional charges.
     */
    additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];
    customerBalance?: Amount;
    googleBalance?: Amount;
    merchantBalance?: Amount;
    productTotal?: Amount;
    /**
     * Deprecated.
     */
    promotionSummaries?: Promotion[];
}
