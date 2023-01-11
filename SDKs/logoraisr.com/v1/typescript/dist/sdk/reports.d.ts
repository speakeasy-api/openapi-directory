import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * reportsCreate - Create a new report.
     *
     * This POST-Method creates a new report.
    **/
    reportsCreate(req: operations.ReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ReportsCreateResponse>;
    /**
     * reportsList - Get user report list.
     *
     * This GET method lists the user's reports.
    **/
    reportsList(config?: AxiosRequestConfig): Promise<operations.ReportsListResponse>;
    /**
     * reportsRead - Get report details.
     *
     * This GET-Method returns the details of a specific report.
    **/
    reportsRead(req: operations.ReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ReportsReadResponse>;
}
