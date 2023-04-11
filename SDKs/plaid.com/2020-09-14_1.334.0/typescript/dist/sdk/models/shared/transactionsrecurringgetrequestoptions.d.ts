import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to be used with the request. If specified, `options` must not be `null`.
 */
export declare class TransactionsRecurringGetRequestOptions extends SpeakeasyBase {
    /**
     * Include the [`personal_finance_category`](https://plaid.com/docs/api/products/transactions/#transactions-get-response-transactions-personal-finance-category) object for each transaction stream in the response.
     *
     * @remarks
     *
     * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
     */
    includePersonalFinanceCategory?: boolean;
}
