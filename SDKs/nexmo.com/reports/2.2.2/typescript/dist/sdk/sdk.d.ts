import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The [Reports API](/reports/overview) enables you to request a report of activity for your Vonage account.
 *
 * @remarks
 *
 * Depending on your query pattern, you can choose from one of the two versions of the Reports API: asynchronous and synchronous. The asynchronous version is optimized for infrequent and large data queries (from several records to tens of millions). The synchronous version is optimized for frequent and periodic retrievals of small batches of data records (from one record to tens of thousand per query).
 *
 * Only synchronous version supports retrival of data records by message/record ID.
 *
 * Vonage recommends that you limit asynchronous queries to a maximum of 20 million records, by setting the start and end dates accordingly. On average, the asynchronous Reports API takes 5 - 10 minutes to generate 1 million records.
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Cancel the execution of a report
     *
     * @remarks
     * Cancel the execution of a pending or processing report.
     */
    cancelReport(req: operations.CancelReportRequest, security: operations.CancelReportSecurity, config?: AxiosRequestConfig): Promise<operations.CancelReportResponse>;
    /**
     * Create an asynchronous report
     *
     * @remarks
     * Request a report on your account activity
     */
    createAsyncReport(req: any, security: operations.CreateAsyncReportSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAsyncReportResponse>;
    /**
     * Get report data
     *
     * @remarks
     * Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`.
     *
     */
    downloadReport(req: operations.DownloadReportRequest, security: operations.DownloadReportSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadReportResponse>;
    /**
     * Load records synchronously
     *
     * @remarks
     * Fetch usage data synchronously
     */
    getRecords(req: operations.GetRecordsRequest, security: operations.GetRecordsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRecordsResponse>;
    /**
     * Get status of report
     *
     * @remarks
     * Retrieve status and metadata about a requested report.
     */
    getReport(req: operations.GetReportRequest, security: operations.GetReportSecurity, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * List reports
     *
     * @remarks
     * List reports created by the specified account based on filtered provided.
     */
    listReports(req: operations.ListReportsRequest, security: operations.ListReportsSecurity, config?: AxiosRequestConfig): Promise<operations.ListReportsResponse>;
}
