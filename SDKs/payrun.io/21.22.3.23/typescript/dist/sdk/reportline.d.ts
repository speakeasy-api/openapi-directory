import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReportLine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReportLineFromEmployer - Gets the specified report line from the employer
     *
     * Returns the specified pay line from employee
    **/
    getReportLineFromEmployer(req: operations.GetReportLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLineFromEmployerResponse>;
    /**
     * getReportLinesFromEmployer - Gets the report lines from the specified employer
     *
     * Get links to all report lines for the specified employee
    **/
    getReportLinesFromEmployer(req: operations.GetReportLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromEmployerResponse>;
    /**
     * getReportLinesFromPayRun - Gets the report lines from the specified pay run
     *
     * Returns all report lines associated with the specified pay run
    **/
    getReportLinesFromPayRun(req: operations.GetReportLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromPayRunResponse>;
}
