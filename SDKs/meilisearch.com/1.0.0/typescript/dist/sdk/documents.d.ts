import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add or replace documents
     *
     * @remarks
     * Add or replace documents
     */
    addOrReplaceDocuments(req: operations.AddOrReplaceDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.AddOrReplaceDocumentsResponse>;
    /**
     * Add or update documents
     *
     * @remarks
     * Add or update documents
     */
    addOrUpdateDocuments(req: operations.AddOrUpdateDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateDocumentsResponse>;
    /**
     * Delete all documents
     *
     * @remarks
     * Delete all documents
     */
    deleteAllDocuments(config?: AxiosRequestConfig): Promise<operations.DeleteAllDocumentsResponse>;
    /**
     * Delete documents
     *
     * @remarks
     * Delete documents
     */
    deleteDocuments(req: number[], config?: AxiosRequestConfig): Promise<operations.DeleteDocumentsResponse>;
    /**
     * Delete one document
     *
     * @remarks
     * Delete one document
     */
    deleteOneDocument(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.DeleteOneDocumentResponse>;
    /**
     * Get documents
     *
     * @remarks
     * Get documents
     */
    getDocuments(req: operations.GetDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentsResponse>;
    /**
     * Get one document
     *
     * @remarks
     * Get one document
     */
    getOneDocument(req: operations.GetOneDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetOneDocumentResponse>;
}
