import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transaction represents the entire purchase transaction.
 */
export declare class GoogleCloudDiscoveryengineV1betaTransactionInfo extends SpeakeasyBase {
    /**
     * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost
     */
    cost?: number;
    /**
     * Required. Currency code. Use three-character ISO-4217 code.
     */
    currency?: string;
    /**
     * The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost
     */
    discountValue?: number;
    /**
     * All the taxes associated with the transaction.
     */
    tax?: number;
    /**
     * The transaction ID with a length limit of 128 characters.
     */
    transactionId?: string;
    /**
     * Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.
     */
    value?: number;
}
