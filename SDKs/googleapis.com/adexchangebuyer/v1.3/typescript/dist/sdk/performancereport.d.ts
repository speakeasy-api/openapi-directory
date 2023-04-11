import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PerformanceReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the authenticated user's list of performance metrics.
     */
    adexchangebuyerPerformanceReportList(req: operations.AdexchangebuyerPerformanceReportListRequest, security: operations.AdexchangebuyerPerformanceReportListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPerformanceReportListResponse>;
}
