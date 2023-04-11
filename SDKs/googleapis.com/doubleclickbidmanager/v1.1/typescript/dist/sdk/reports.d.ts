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
     * Retrieves stored reports.
     */
    doubleclickbidmanagerReportsListreports(req: operations.DoubleclickbidmanagerReportsListreportsRequest, security: operations.DoubleclickbidmanagerReportsListreportsSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerReportsListreportsResponse>;
}
