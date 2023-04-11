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
    adexchangebuyerAccountsGet(req: operations.AdexchangebuyerAccountsGetRequest, security: operations.AdexchangebuyerAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsGetResponse>;
    /**
     * Retrieves the authenticated user's list of accounts.
     */
    adexchangebuyerAccountsList(req: operations.AdexchangebuyerAccountsListRequest, security: operations.AdexchangebuyerAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsListResponse>;
    /**
     * Updates an existing account. This method supports patch semantics.
     */
    adexchangebuyerAccountsPatch(req: operations.AdexchangebuyerAccountsPatchRequest, security: operations.AdexchangebuyerAccountsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsPatchResponse>;
    /**
     * Updates an existing account.
     */
    adexchangebuyerAccountsUpdate(req: operations.AdexchangebuyerAccountsUpdateRequest, security: operations.AdexchangebuyerAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsUpdateResponse>;
}
