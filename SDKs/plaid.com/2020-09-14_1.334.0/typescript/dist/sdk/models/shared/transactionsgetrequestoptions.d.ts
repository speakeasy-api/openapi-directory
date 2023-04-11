import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to be used with the request. If specified, `options` must not be `null`.
 */
export declare class TransactionsGetRequestOptions extends SpeakeasyBase {
    /**
     * A list of `account_ids` to retrieve for the Item
     *
     * @remarks
     *
     * Note: An error will be returned if a provided `account_id` is not associated with the Item.
     */
    accountIds?: string[];
    /**
     * The number of transactions to fetch.
     */
    count?: number;
    /**
     * Include counterparties and extran merchant fields in the transaction. This field is disabled by default. If you need this information in addition to the parsed data provided, contact your Plaid Account Manager.
     */
    includeLogoAndCounterpartyBeta?: boolean;
    /**
     * Include the raw unparsed transaction description from the financial institution. This field is disabled by default. If you need this information in addition to the parsed data provided, contact your Plaid Account Manager.
     */
    includeOriginalDescription?: boolean;
    /**
     * Include the [`personal_finance_category`](https://plaid.com/docs/api/products/transactions/#transactions-get-response-transactions-personal-finance-category) object in the response.
     *
     * @remarks
     *
     * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
     *
     * We’re introducing Category Rules - a new beta endpoint that will enable you to change the `personal_finance_category` for a transaction based on your users’ needs. When rules are set, the selected category will override the Plaid provided category. To learn more, send a note to transactions-feedback@plaid.com.
     */
    includePersonalFinanceCategory?: boolean;
    /**
     * Please use [`include_personal_finance_category`](https://plaid.com/docs/api/products/transactions/#transactions-get-request-options-include-personal-finance-category) instead.
     */
    includePersonalFinanceCategoryBeta?: boolean;
    /**
     * The number of transactions to skip. The default value is 0.
     */
    offset?: number;
}
