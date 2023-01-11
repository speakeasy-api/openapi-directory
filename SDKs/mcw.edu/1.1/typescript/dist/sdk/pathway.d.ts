import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pathway {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPathwaysWithDiagramsForCategoryUsingGet - Return a list of pathways based on category provided
    **/
    getPathwaysWithDiagramsForCategoryUsingGet(req: operations.GetPathwaysWithDiagramsForCategoryUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse>;
    /**
     * searchPathwaysUsingGet - Return a list of pathways based on search term
    **/
    searchPathwaysUsingGet(req: operations.SearchPathwaysUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SearchPathwaysUsingGetResponse>;
}
