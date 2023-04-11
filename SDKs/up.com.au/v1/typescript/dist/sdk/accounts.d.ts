import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Accounts represent the underlying store used to track balances
 *
 * @remarks
 * and the transactions that have occurred to modify those balances
 * over time. Up currently has two types of account: `SAVER`—used to
 * earn interest and to hit savings goals, and `TRANSACTIONAL`—used
 * for everyday spending.
 *
 */
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List accounts
     *
     * @remarks
     * Retrieve a paginated list of all accounts for the currently
     * authenticated user. The returned list is paginated and can be scrolled
     * by following the `prev` and `next` links where present.
     *
     */
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * Retrieve account
     *
     * @remarks
     * Retrieve a specific account by providing its unique identifier.
     *
     */
    getAccountsId(req: operations.GetAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdResponse>;
}
