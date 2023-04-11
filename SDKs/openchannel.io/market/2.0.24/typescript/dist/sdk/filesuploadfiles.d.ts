import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FilesUploadFiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a paginated list of files
     */
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * Get the details for a file.
     */
    getFilesByIdOrUrl(req: operations.GetFilesByIdOrUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesByIdOrUrlResponse>;
    /**
     * A signed URL for downloading a private file can be returned by providing the fileId.
     */
    getFilesDownload(req: operations.GetFilesDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesDownloadResponse>;
    /**
     * Uploads a file.
     *
     * @remarks
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
     */
    postFiles(req: operations.PostFilesRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesResponse>;
    /**
     * Uploads a file from a URL
     *
     * @remarks
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
     */
    postFilesUrl(req: operations.PostFilesUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesUrlResponse>;
}
