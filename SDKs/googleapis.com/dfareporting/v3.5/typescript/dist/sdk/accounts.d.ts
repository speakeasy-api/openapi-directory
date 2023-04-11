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
     * Gets one account by ID.
     */
    dfareportingAccountsGet(req: operations.DfareportingAccountsGetRequest, security: operations.DfareportingAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsGetResponse>;
    /**
     * Retrieves the list of accounts, possibly filtered. This method supports paging.
     */
    dfareportingAccountsList(req: operations.DfareportingAccountsListRequest, security: operations.DfareportingAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsListResponse>;
    /**
     * Updates an existing account. This method supports patch semantics.
     */
    dfareportingAccountsPatch(req: operations.DfareportingAccountsPatchRequest, security: operations.DfareportingAccountsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsPatchResponse>;
    /**
     * Updates an existing account.
     */
    dfareportingAccountsUpdate(req: operations.DfareportingAccountsUpdateRequest, security: operations.DfareportingAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsUpdateResponse>;
}
