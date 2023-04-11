import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pathway {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of pathways based on category provided
     */
    getPathwaysWithDiagramsForCategoryUsingGET(req: operations.GETPathwaysWithDiagramsForCategoryUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETPathwaysWithDiagramsForCategoryUsingGETResponse>;
    /**
     * Return a list of pathways based on search term
     */
    searchPathwaysUsingGET(req: operations.SearchPathwaysUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SearchPathwaysUsingGETResponse>;
}
