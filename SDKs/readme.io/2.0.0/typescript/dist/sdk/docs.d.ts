import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Docs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create doc
     *
     * @remarks
     * Create a new doc inside of this project
     */
    createDoc(req: operations.CreateDocRequest, security: operations.CreateDocSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDocResponse>;
    /**
     * Delete doc
     *
     * @remarks
     * Delete the doc with this slug
     */
    deleteDoc(req: operations.DeleteDocRequest, security: operations.DeleteDocSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDocResponse>;
    /**
     * Get doc
     *
     * @remarks
     * Returns the doc with this slug
     */
    getDoc(req: operations.GetDocRequest, security: operations.GetDocSecurity, config?: AxiosRequestConfig): Promise<operations.GetDocResponse>;
    /**
     * Search docs
     *
     * @remarks
     * Returns all docs that match the search
     */
    searchDocs(req: operations.SearchDocsRequest, security: operations.SearchDocsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchDocsResponse>;
    /**
     * Update doc
     *
     * @remarks
     * Update a doc with this slug
     */
    updateDoc(req: operations.UpdateDocRequest, security: operations.UpdateDocSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDocResponse>;
}
