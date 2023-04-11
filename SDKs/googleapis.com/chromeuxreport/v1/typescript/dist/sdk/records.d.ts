import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Records {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
     */
    chromeuxreportRecordsQueryHistoryRecord(req: operations.ChromeuxreportRecordsQueryHistoryRecordRequest, config?: AxiosRequestConfig): Promise<operations.ChromeuxreportRecordsQueryHistoryRecordResponse>;
    /**
     * Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
     */
    chromeuxreportRecordsQueryRecord(req: operations.ChromeuxreportRecordsQueryRecordRequest, config?: AxiosRequestConfig): Promise<operations.ChromeuxreportRecordsQueryRecordResponse>;
}
