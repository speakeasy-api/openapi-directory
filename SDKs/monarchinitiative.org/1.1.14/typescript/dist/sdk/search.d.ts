import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search for entities
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of matching concepts or entities using lexical search
     */
    getAutocomplete(req: operations.GetAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetAutocompleteResponse>;
    /**
     * Returns list of matching concepts or entities using lexical search
     */
    getSearchEntities(req: operations.GetSearchEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchEntitiesResponse>;
    /**
     * Returns list of matching concepts or entities using lexical search
     */
    getSearchHpoEntities(req: operations.GetSearchHpoEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchHpoEntitiesResponse>;
}
