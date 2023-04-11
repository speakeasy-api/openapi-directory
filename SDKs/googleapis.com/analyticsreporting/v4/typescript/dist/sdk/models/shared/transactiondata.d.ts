import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents details collected when the visitor performs a transaction on the page.
 */
export declare class TransactionData extends SpeakeasyBase {
    /**
     * The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart.
     */
    transactionId?: string;
    /**
     * The total sale revenue (excluding shipping and tax) of the transaction.
     */
    transactionRevenue?: number;
    /**
     * Total cost of shipping.
     */
    transactionShipping?: number;
    /**
     * Total tax for the transaction.
     */
    transactionTax?: number;
}
