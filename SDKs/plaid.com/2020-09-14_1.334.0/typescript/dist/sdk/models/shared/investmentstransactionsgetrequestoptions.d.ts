import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
 */
export declare class InvestmentsTransactionsGetRequestOptions extends SpeakeasyBase {
    /**
     * An array of `account_ids` to retrieve for the Item.
     */
    accountIds?: string[];
    /**
     * The number of transactions to fetch.
     *
     * @remarks
     *
     */
    count?: number;
    /**
     * The number of transactions to skip when fetching transaction history
     */
    offset?: number;
}
