import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for creating, deleting or updating accounts.
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
     * Add users to an account
     *
     * @remarks
     * You can add up to 100 users to an account.
     */
    addUserToAccount(req: operations.AddUserToAccountRequestBody, config?: AxiosRequestConfig): Promise<operations.AddUserToAccountResponse>;
    /**
     * Delete account
     *
     * @remarks
     * Endpoint used to delete an account.
     */
    deleteAccount(req: operations.DeleteAccountRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteAccountResponse>;
    /**
     * Remove user from account
     *
     * @remarks
     * You can remove up to 100 users from an account.
     *
     * When removing a user, the user will still be stored in journy.io, but marked as "removed".
     *
     */
    removeUserFromAccount(req: operations.RemoveUserFromAccountRequestBody, config?: AxiosRequestConfig): Promise<operations.RemoveUserFromAccountResponse>;
    /**
     * Create or update account
     *
     * @remarks
     * Endpoint used to create or update an account.
     */
    upsertAccount(req: operations.UpsertAccountRequestBody, config?: AxiosRequestConfig): Promise<operations.UpsertAccountResponse>;
}
