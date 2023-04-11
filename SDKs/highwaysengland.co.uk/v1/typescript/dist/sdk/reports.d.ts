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
     * Gets the daily report.
     *
     * @remarks
     * Get's the report.
     */
    reportsIndex(req: operations.ReportsIndexRequest, config?: AxiosRequestConfig): Promise<operations.ReportsIndexResponse>;
    /**
     * Gets the daily report.
     *
     * @remarks
     * Get's the report.
     */
    getVVersionReportsStartDateToEndDateReportType(req: operations.GetVVersionReportsStartDateToEndDateReportTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionReportsStartDateToEndDateReportTypeResponse>;
}
