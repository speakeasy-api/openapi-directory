import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DeveloperAccountsFindAndModifyDeveloperAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes the developer account
     */
    deleteDeveloperAccountsDeveloperAccountId(req: operations.DeleteDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * Returns a paginated list of developerAccounts
     *
     * @remarks
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
     */
    getDeveloperAccounts(req: operations.GetDeveloperAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsResponse>;
    /**
     * Returns a single developer account
     */
    getDeveloperAccountsDeveloperAccountId(req: operations.GetDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * Updates the developer account fields
     */
    patchDeveloperAccountsDeveloperAccountId(req: operations.PatchDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * Updates the developer account or adds the developer account if it doesn't exist
     */
    postDeveloperAccountsDeveloperAccountId(req: operations.PostDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDeveloperAccountsDeveloperAccountIdResponse>;
}
