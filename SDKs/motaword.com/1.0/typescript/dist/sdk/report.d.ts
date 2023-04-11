import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Report {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a QA report for given filter
     *
     * @remarks
     * Generate a QA report for given filter
     */
    generateQAReport(req: shared.QaFilter, config?: AxiosRequestConfig): Promise<operations.GenerateQAReportResponse>;
    /**
     * Returns available options for selected timeframe.
     */
    getFilterContents(req: shared.FilterDates, config?: AxiosRequestConfig): Promise<operations.GetFilterContentsResponse>;
    /**
     * Language pairs report
     *
     * @remarks
     * View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.
     */
    getLanguagePairsReport(req: shared.ReportFilter, config?: AxiosRequestConfig): Promise<operations.GetLanguagePairsReportResponse>;
    /**
     * Projects report
     *
     * @remarks
     * View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.
     */
    getProjectsReport(req: shared.ReportFilter, config?: AxiosRequestConfig): Promise<operations.GetProjectsReportResponse>;
    /**
     * Company users report
     *
     * @remarks
     * View translation reports for each user under your company account. You need the permission to view users in your company.
     */
    getUsersReport(req: shared.ReportFilter, config?: AxiosRequestConfig): Promise<operations.GetUsersReportResponse>;
}
