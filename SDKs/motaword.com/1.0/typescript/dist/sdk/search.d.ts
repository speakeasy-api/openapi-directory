import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkDocumentsReindex - Check reindex status of the client source and translation documents.
    **/
    checkDocumentsReindex(req: operations.CheckDocumentsReindexRequest, config?: AxiosRequestConfig): Promise<operations.CheckDocumentsReindexResponse>;
    /**
     * reindexDocuments - Reindex for search all of the client source and translation documents.
    **/
    reindexDocuments(config?: AxiosRequestConfig): Promise<operations.ReindexDocumentsResponse>;
    /**
     * searchEverywhere - Search everywhere! Including projects, documents, translations...
    **/
    searchEverywhere(req: operations.SearchEverywhereRequest, config?: AxiosRequestConfig): Promise<operations.SearchEverywhereResponse>;
}
