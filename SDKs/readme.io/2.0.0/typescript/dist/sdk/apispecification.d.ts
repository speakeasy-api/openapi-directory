import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiSpecification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteApiSpecification - Delete an API specification in ReadMe
    **/
    deleteApiSpecification(req: operations.DeleteApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiSpecificationResponse>;
    /**
     * getApiSpecification - Get API specification metadata
    **/
    getApiSpecification(req: operations.GetApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSpecificationResponse>;
    /**
     * updateApiSpecification - Update an API specification in ReadMe
    **/
    updateApiSpecification(req: operations.UpdateApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiSpecificationResponse>;
    /**
     * uploadApiSpecification - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github
    **/
    uploadApiSpecification(req: operations.UploadApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UploadApiSpecificationResponse>;
}
