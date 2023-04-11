import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete account
     *
     * @remarks
     * Deletes an account and all its data by ID, optionally merge scenarios into another account.
     */
    deleteAccountsId(req: operations.DeleteAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountsIdResponse>;
    /**
     * Get account
     *
     * @remarks
     * Gets an account by its ID.
     */
    getAccountsId(req: operations.GetAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdResponse>;
    /**
     * List accounts in institution
     *
     * @remarks
     * Lists accounts belonging to an institution by its ID.
     */
    getInstitutionsIdAccounts(req: operations.GetInstitutionsIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstitutionsIdAccountsResponse>;
    /**
     * List accounts in user
     *
     * @remarks
     * Lists all accounts belonging to the user by their ID.
     */
    getUsersIdAccounts(req: operations.GetUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdAccountsResponse>;
    /**
     * Create an account in user
     *
     * @remarks
     * Creates and returns an account belonging to the user by their ID.
     */
    postUsersIdAccounts(req: operations.PostUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdAccountsResponse>;
    /**
     * Update account
     *
     * @remarks
     * Updates and returns an account by its ID.
     */
    putAccountsId(req: operations.PutAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountsIdResponse>;
    /**
     * Update the display order of accounts in user
     *
     * @remarks
     * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
     */
    putUsersIdAccounts(req: operations.PutUsersIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdAccountsResponse>;
}
