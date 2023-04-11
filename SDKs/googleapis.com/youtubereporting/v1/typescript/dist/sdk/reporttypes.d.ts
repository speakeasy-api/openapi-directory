import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReportTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists report types.
     */
    youtubereportingReportTypesList(req: operations.YoutubereportingReportTypesListRequest, security: operations.YoutubereportingReportTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingReportTypesListResponse>;
}
