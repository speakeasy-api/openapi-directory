import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Swagger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSwagger - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
    **/
    deleteSwagger(req: operations.DeleteSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSwaggerResponse>;
    /**
     * updateSwagger - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
    **/
    updateSwagger(req: operations.UpdateSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSwaggerResponse>;
    /**
     * uploadSwagger - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe
    **/
    uploadSwagger(req: operations.UploadSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UploadSwaggerResponse>;
}
