import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a summarized campaign information associated with this invoice.
 */
export declare class CampaignSummary extends SpeakeasyBase {
    /**
     * Campaign billing invoice code.
     */
    billingInvoiceCode?: string;
    /**
     * Campaign ID.
     */
    campaignId?: string;
    /**
     * The pre-tax amount for this campaign, in micros of the invoice's currency.
     */
    preTaxAmountMicros?: string;
    /**
     * The tax amount for this campaign, in micros of the invoice's currency.
     */
    taxAmountMicros?: string;
    /**
     * The total amount of charges for this campaign, in micros of the invoice's currency.
     */
    totalAmountMicros?: string;
}
