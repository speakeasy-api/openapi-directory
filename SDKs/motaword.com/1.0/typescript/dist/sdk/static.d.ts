import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Static {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEndpoints - Available endpoints
     *
     * The root endpoint will provide you a JSON Swagger definition.
     *
    **/
    getEndpoints(config?: AxiosRequestConfig): Promise<operations.GetEndpointsResponse>;
    /**
     * getFormats - Get a list of supported formats
     *
     * Get a list of supported formats for documents, style guides and extensions.
     *
    **/
    getFormats(config?: AxiosRequestConfig): Promise<operations.GetFormatsResponse>;
    /**
     * getLanguages - Get a list of supported languages
     *
     * Get a list of supported languages
    **/
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * getSwaggerJson - Get Swagger JSON
     *
     * Get Swagger JSON
    **/
    getSwaggerJson(config?: AxiosRequestConfig): Promise<operations.GetSwaggerJsonResponse>;
}
