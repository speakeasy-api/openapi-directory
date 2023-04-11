import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to be used with the request.
 */
export declare class TransactionsEnrichRequestOptions extends SpeakeasyBase {
    /**
     * Include `legacy_category` and `legacy_category_id` in the response (in addition to the default `personal_finance_category`).
     *
     * @remarks
     *
     * Categories are based on Plaid's legacy taxonomy. For a full list of legacy categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
     */
    includeLegacyCategory?: boolean;
}
