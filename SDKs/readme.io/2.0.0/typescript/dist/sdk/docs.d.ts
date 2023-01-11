import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Docs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDoc - Create doc
     *
     * Create a new doc inside of this project
    **/
    createDoc(req: operations.CreateDocRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocResponse>;
    /**
     * deleteDoc - Delete doc
     *
     * Delete the doc with this slug
    **/
    deleteDoc(req: operations.DeleteDocRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocResponse>;
    /**
     * getDoc - Get doc
     *
     * Returns the doc with this slug
    **/
    getDoc(req: operations.GetDocRequest, config?: AxiosRequestConfig): Promise<operations.GetDocResponse>;
    /**
     * searchDocs - Search docs
     *
     * Returns all docs that match the search
    **/
    searchDocs(req: operations.SearchDocsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDocsResponse>;
    /**
     * updateDoc - Update doc
     *
     * Update a doc with this slug
    **/
    updateDoc(req: operations.UpdateDocRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocResponse>;
}
