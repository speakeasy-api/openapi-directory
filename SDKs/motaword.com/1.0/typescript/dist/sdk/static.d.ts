import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Static {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Available endpoints
     *
     * @remarks
     * The root endpoint will provide you with an OpenAPI definition of MotaWord API.
     *
     */
    getEndpoints(config?: AxiosRequestConfig): Promise<operations.GetEndpointsResponse>;
    /**
     * List of supported file formats
     *
     * @remarks
     * Get a list of supported formats for documents, style guides and extensions.
     *
     */
    getFormats(config?: AxiosRequestConfig): Promise<operations.GetFormatsResponse>;
    /**
     * List of supported languages
     *
     * @remarks
     * Get a list of supported languages
     */
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * OpenAPI YAML representation of our API
     *
     * @remarks
     * Get Swagger YAML
     */
    getSwaggerYaml(config?: AxiosRequestConfig): Promise<operations.GetSwaggerYamlResponse>;
}
