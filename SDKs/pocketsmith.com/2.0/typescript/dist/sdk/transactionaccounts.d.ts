import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TransactionAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get transaction account
     *
     * @remarks
     * Gets a transaction account by its ID.
     */
    getTransactionAccountsId(req: operations.GetTransactionAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionAccountsIdResponse>;
    /**
     * List transaction accounts in user
     *
     * @remarks
     * List all transaction accounts belonging to a user.
     */
    getUsersIdTransactionAccounts(req: operations.GetUsersIdTransactionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTransactionAccountsResponse>;
    /**
     * Update transaction account
     *
     * @remarks
     * Updates the transaction account by its ID.
     */
    putTransactionAccountsId(req: operations.PutTransactionAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTransactionAccountsIdResponse>;
}
