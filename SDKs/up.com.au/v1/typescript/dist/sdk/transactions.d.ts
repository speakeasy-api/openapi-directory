import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Transactions represent the movement of money into and out of an
 *
 * @remarks
 * account. They have many characteristics that vary depending on
 * the kind of transaction. Transactions may be temporarily `HELD`
 * (pending) or `SETTLED`, typically depending on which payment
 * method was used at the point of sale.
 *
 */
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List transactions by account
     *
     * @remarks
     * Retrieve a list of all transactions for a specific account. The returned
     * list is [paginated](#pagination) and can be scrolled by following the
     * `next` and `prev` links where present. To narrow the results to a
     * specific date range pass one or both of `filter[since]` and
     * `filter[until]` in the query string. These filter parameters
     * **should not** be used for pagination. Results are ordered newest first
     * to oldest last.
     *
     */
    getAccountsAccountIdTransactions(req: operations.GetAccountsAccountIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdTransactionsResponse>;
    /**
     * List transactions
     *
     * @remarks
     * Retrieve a list of all transactions across all accounts for the currently
     * authenticated user. The returned list is [paginated](#pagination) and can
     * be scrolled by following the `next` and `prev` links where present. To
     * narrow the results to a specific date range pass one or both of
     * `filter[since]` and `filter[until]` in the query string. These filter
     * parameters **should not** be used for pagination. Results are ordered
     * newest first to oldest last.
     *
     */
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * Retrieve transaction
     *
     * @remarks
     * Retrieve a specific transaction by providing its unique identifier.
     *
     */
    getTransactionsId(req: operations.GetTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
}
