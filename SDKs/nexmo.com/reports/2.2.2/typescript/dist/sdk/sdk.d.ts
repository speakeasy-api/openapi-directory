import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.nexmo.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * cancelReport - Cancel the execution of a report
     *
     * Cancel the execution of a pending or processing report.
    **/
    cancelReport(req: operations.CancelReportRequest, config?: AxiosRequestConfig): Promise<operations.CancelReportResponse>;
    /**
     * createAsyncReport - Create an asynchronous report
     *
     * Request a report on your account activity
    **/
    createAsyncReport(req: operations.CreateAsyncReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateAsyncReportResponse>;
    /**
     * downloadReport - Get report data
     *
     * Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`.
     *
    **/
    downloadReport(req: operations.DownloadReportRequest, config?: AxiosRequestConfig): Promise<operations.DownloadReportResponse>;
    /**
     * getRecords - Load records synchronously
     *
     * Fetch usage data synchronously
    **/
    getRecords(req: operations.GetRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsResponse>;
    /**
     * getReport - Get status of report
     *
     * Retrieve status and metadata about a requested report.
    **/
    getReport(req: operations.GetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * listReports - List reports
     *
     * List reports created by the specified account based on filtered provided.
    **/
    listReports(req: operations.ListReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportsResponse>;
}
