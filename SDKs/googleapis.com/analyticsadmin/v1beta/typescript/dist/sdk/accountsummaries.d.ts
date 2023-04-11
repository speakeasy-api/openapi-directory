import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountSummaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns summaries of all accounts accessible by the caller.
     */
    analyticsadminAccountSummariesList(req: operations.AnalyticsadminAccountSummariesListRequest, security: operations.AnalyticsadminAccountSummariesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminAccountSummariesListResponse>;
}
