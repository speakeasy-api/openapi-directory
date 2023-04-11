import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transaction represents the entire purchase transaction.
 */
export declare class GoogleCloudRetailV2betaPurchaseTransaction extends SpeakeasyBase {
    /**
     * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost
     */
    cost?: number;
    /**
     * Required. Currency code. Use three-character ISO-4217 code.
     */
    currencyCode?: string;
    /**
     * The transaction ID with a length limit of 128 characters.
     */
    id?: string;
    /**
     * Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations.
     */
    revenue?: number;
    /**
     * All the taxes associated with the transaction.
     */
    tax?: number;
}
