import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Report {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLanguagePairsReport - Returns a report of language pairs.
    **/
    getLanguagePairsReport(req: operations.GetLanguagePairsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetLanguagePairsReportResponse>;
    /**
     * getProjectsReport - Returns a report of corporate account users.
    **/
    getProjectsReport(req: operations.GetProjectsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsReportResponse>;
    /**
     * getUsersReport - Returns a report of corporate account users.
    **/
    getUsersReport(req: operations.GetUsersReportRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersReportResponse>;
}
