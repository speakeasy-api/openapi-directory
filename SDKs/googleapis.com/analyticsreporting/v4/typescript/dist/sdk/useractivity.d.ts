import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserActivity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns User Activity data.
     */
    analyticsreportingUserActivitySearch(req: operations.AnalyticsreportingUserActivitySearchRequest, security: operations.AnalyticsreportingUserActivitySearchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsreportingUserActivitySearchResponse>;
}
