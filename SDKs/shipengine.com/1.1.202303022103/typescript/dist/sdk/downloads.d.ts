import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * downloads
 *
 * @remarks
 *
 */
export declare class Downloads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download File
     *
     * @remarks
     * Get File
     */
    downloadFile(req: operations.DownloadFileRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileResponse>;
}
