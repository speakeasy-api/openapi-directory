import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Async {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download result of an async operation
     *
     * @remarks
     * Download the result of an async operation that you have requested in other endpoints.
     */
    downloadAsync(req: operations.DownloadAsyncRequest, config?: AxiosRequestConfig): Promise<operations.DownloadAsyncResponse>;
}
