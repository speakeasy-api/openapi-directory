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
     * Get a workspace stats
     */
    getWorkspaceSlugReports(req: operations.GetWorkspaceSlugReportsRequest, security: operations.GetWorkspaceSlugReportsSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugReportsResponse>;
}
