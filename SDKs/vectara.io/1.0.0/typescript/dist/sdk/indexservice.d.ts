import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Indexing operations, such as creating and deleting documents
 */
export declare class IndexService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete
     */
    delete(req: operations.DeleteRequest, security: operations.DeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * File Upload
     */
    fileUpload(req: operations.FileUploadRequest, security: operations.FileUploadSecurity, config?: AxiosRequestConfig): Promise<operations.FileUploadResponse>;
    /**
     * Index
     */
    index(req: operations.IndexRequest, security: operations.IndexSecurity, config?: AxiosRequestConfig): Promise<operations.IndexResponse>;
}
