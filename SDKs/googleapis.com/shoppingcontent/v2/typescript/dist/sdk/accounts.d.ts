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
     * Returns information about the authenticated user.
     */
    contentAccountsAuthinfo(req: operations.ContentAccountsAuthinfoRequest, security: operations.ContentAccountsAuthinfoSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsAuthinfoResponse>;
    /**
     * Claims the website of a Merchant Center sub-account.
     */
    contentAccountsClaimwebsite(req: operations.ContentAccountsClaimwebsiteRequest, security: operations.ContentAccountsClaimwebsiteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsClaimwebsiteResponse>;
    /**
     * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     */
    contentAccountsCustombatch(req: operations.ContentAccountsCustombatchRequest, security: operations.ContentAccountsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCustombatchResponse>;
    /**
     * Deletes a Merchant Center sub-account.
     */
    contentAccountsDelete(req: operations.ContentAccountsDeleteRequest, security: operations.ContentAccountsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsDeleteResponse>;
    /**
     * Retrieves a Merchant Center account.
     */
    contentAccountsGet(req: operations.ContentAccountsGetRequest, security: operations.ContentAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsGetResponse>;
    /**
     * Creates a Merchant Center sub-account.
     */
    contentAccountsInsert(req: operations.ContentAccountsInsertRequest, security: operations.ContentAccountsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsInsertResponse>;
    /**
     * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     */
    contentAccountsLink(req: operations.ContentAccountsLinkRequest, security: operations.ContentAccountsLinkSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLinkResponse>;
    /**
     * Lists the sub-accounts in your Merchant Center account.
     */
    contentAccountsList(req: operations.ContentAccountsListRequest, security: operations.ContentAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListResponse>;
    /**
     * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     */
    contentAccountsUpdate(req: operations.ContentAccountsUpdateRequest, security: operations.ContentAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdateResponse>;
}
