import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Swagger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
     */
    deleteSwagger(req: operations.DeleteSwaggerRequest, security: operations.DeleteSwaggerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSwaggerResponse>;
    /**
     * DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
     */
    updateSwagger(req: operations.UpdateSwaggerRequest, security: operations.UpdateSwaggerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSwaggerResponse>;
    /**
     * DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe
     */
    uploadSwagger(req: operations.UploadSwaggerRequestBody, security: operations.UploadSwaggerSecurity, config?: AxiosRequestConfig): Promise<operations.UploadSwaggerResponse>;
}
