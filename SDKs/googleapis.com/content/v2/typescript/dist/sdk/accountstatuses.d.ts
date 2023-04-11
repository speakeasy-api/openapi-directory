import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accountstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves multiple Merchant Center account statuses in a single request.
     */
    contentAccountstatusesCustombatch(req: operations.ContentAccountstatusesCustombatchRequest, security: operations.ContentAccountstatusesCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesCustombatchResponse>;
    /**
     * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
     */
    contentAccountstatusesGet(req: operations.ContentAccountstatusesGetRequest, security: operations.ContentAccountstatusesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesGetResponse>;
    /**
     * Lists the statuses of the sub-accounts in your Merchant Center account.
     */
    contentAccountstatusesList(req: operations.ContentAccountstatusesListRequest, security: operations.ContentAccountstatusesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesListResponse>;
}
