import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
export declare class InvoiceSummary extends SpeakeasyBase {
    /**
     * Summary of the total amounts of the additional charges.
     */
    additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];
    productTotal?: Amount;
}
