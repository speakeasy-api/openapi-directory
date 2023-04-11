import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check reindex status of the client source and translation documents.
     */
    checkDocumentsReindex(req: operations.CheckDocumentsReindexRequest, config?: AxiosRequestConfig): Promise<operations.CheckDocumentsReindexResponse>;
    /**
     * Reindex for search all of the client source and translation documents.
     */
    reindexDocuments(config?: AxiosRequestConfig): Promise<operations.ReindexDocumentsResponse>;
    /**
     * Search everything in your account
     *
     * @remarks
     * Search through everything in your account, from projects to documents, from source strings to translations...
     */
    searchEverywhere(req: operations.SearchEverywhereRequest, config?: AxiosRequestConfig): Promise<operations.SearchEverywhereResponse>;
}
