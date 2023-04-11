import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserAccountsFindAndModifyUserAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes the user account
     */
    deleteUserAccountsUserAccountId(req: operations.DeleteUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccountsUserAccountIdResponse>;
    /**
     * Returns a paginated list of userAccounts
     *
     * @remarks
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
     */
    getUserAccounts(req: operations.GetUserAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsResponse>;
    /**
     * Returns a single user account
     */
    getUserAccountsUserAccountId(req: operations.GetUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsUserAccountIdResponse>;
    /**
     * Updates the user account fields
     */
    patchUserAccountsUserAccountId(req: operations.PatchUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserAccountsUserAccountIdResponse>;
    /**
     * Updates the user account or adds the user account if it doesn't exist
     */
    postUserAccountsUserAccountId(req: operations.PostUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUserAccountsUserAccountIdResponse>;
}
