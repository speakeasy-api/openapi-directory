import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class File {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get File from Project.  Works for Regular and Remote Files
     *
     * @remarks
     * Get File from Project.  Works for Regular and Remote Files
     */
    getFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * List Tags from Workgroup and Project.
     *
     * @remarks
     * List Tags from Workgroup and Project.
     */
    getFileTags(req: operations.GetFileTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetFileTagsResponse>;
    /**
     * List Files from Project.  Works for Regular and Remote Files
     *
     * @remarks
     * List Files from Project.  Works for Regular and Remote Files
     */
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * Upload File to Project.  A multipart/form-data request with a name "file"
     *
     * @remarks
     * Upload File to Project.  A multipart/form-data request with a name "file"
     */
    uploadFile(req: operations.UploadFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
