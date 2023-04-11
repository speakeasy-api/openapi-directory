import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     */
    adsenseReportsGenerate(req: operations.AdsenseReportsGenerateRequest, security: operations.AdsenseReportsGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsGenerateResponse>;
    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     */
    adsenseReportsSavedGenerate(req: operations.AdsenseReportsSavedGenerateRequest, security: operations.AdsenseReportsSavedGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsSavedGenerateResponse>;
    /**
     * List all saved reports in this AdSense account.
     */
    adsenseReportsSavedList(req: operations.AdsenseReportsSavedListRequest, security: operations.AdsenseReportsSavedListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsSavedListResponse>;
}
