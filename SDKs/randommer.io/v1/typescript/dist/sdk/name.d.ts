import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Name {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiName - Get name
    **/
    getApiName(req: operations.GetApiNameRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameResponse>;
    /**
     * getApiNameSuggestions - Get business name suggestions
    **/
    getApiNameSuggestions(req: operations.GetApiNameSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameSuggestionsResponse>;
}
