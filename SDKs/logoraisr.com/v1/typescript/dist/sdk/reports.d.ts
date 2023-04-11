import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Create a new report.
     *
     * @remarks
     * This POST-Method creates a new report.
     */
    reportsCreate(req: shared.ReportRequest, config?: AxiosRequestConfig): Promise<operations.ReportsCreateResponse>;
    /**
     * Get user report list.
     *
     * @remarks
     * This GET method lists the user's reports.
     */
    reportsList(config?: AxiosRequestConfig): Promise<operations.ReportsListResponse>;
    /**
     * Get report details.
     *
     * @remarks
     * This GET-Method returns the details of a specific report.
     */
    reportsRead(req: operations.ReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ReportsReadResponse>;
}
