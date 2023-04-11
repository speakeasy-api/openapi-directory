import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about swagger_docs
 */
export declare class SwaggerDoc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Swagger compatible API description
     */
    getSwaggerDocFormat(config?: AxiosRequestConfig): Promise<operations.GETSwaggerDocFormatResponse>;
    /**
     * Swagger compatible API description for specific API
     */
    getSwaggerDocNameFormat(req: operations.GETSwaggerDocNameFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETSwaggerDocNameFormatResponse>;
}
