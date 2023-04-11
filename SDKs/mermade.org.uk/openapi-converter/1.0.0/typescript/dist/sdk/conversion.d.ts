import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Conversion functions
 */
export declare class Conversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x
     */
    convert(req: operations.ConvertRequestBody, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
    /**
     * Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL
     */
    convertUrl(req: operations.ConvertUrlRequest, config?: AxiosRequestConfig): Promise<operations.ConvertUrlResponse>;
}
