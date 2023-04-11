import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
     */
    cloudsupportMediaDownload(req: operations.CloudsupportMediaDownloadRequest, security: operations.CloudsupportMediaDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportMediaDownloadResponse>;
    /**
     * Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.
     */
    cloudsupportMediaUpload(req: operations.CloudsupportMediaUploadRequest, security: operations.CloudsupportMediaUploadSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportMediaUploadResponse>;
}
