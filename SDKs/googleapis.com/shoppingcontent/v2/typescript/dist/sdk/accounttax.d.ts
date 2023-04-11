import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounttax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves and updates tax settings of multiple accounts in a single request.
     */
    contentAccounttaxCustombatch(req: operations.ContentAccounttaxCustombatchRequest, security: operations.ContentAccounttaxCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxCustombatchResponse>;
    /**
     * Retrieves the tax settings of the account.
     */
    contentAccounttaxGet(req: operations.ContentAccounttaxGetRequest, security: operations.ContentAccounttaxGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxGetResponse>;
    /**
     * Lists the tax settings of the sub-accounts in your Merchant Center account.
     */
    contentAccounttaxList(req: operations.ContentAccounttaxListRequest, security: operations.ContentAccounttaxListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxListResponse>;
    /**
     * Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
     */
    contentAccounttaxUpdate(req: operations.ContentAccounttaxUpdateRequest, security: operations.ContentAccounttaxUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxUpdateResponse>;
}
