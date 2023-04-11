import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APISpecification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an API specification in ReadMe
     */
    deleteAPISpecification(req: operations.DeleteAPISpecificationRequest, security: operations.DeleteAPISpecificationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAPISpecificationResponse>;
    /**
     * Get API specification metadata
     */
    getAPISpecification(req: operations.GetAPISpecificationRequest, security: operations.GetAPISpecificationSecurity, config?: AxiosRequestConfig): Promise<operations.GetAPISpecificationResponse>;
    /**
     * Update an API specification in ReadMe
     */
    updateAPISpecification(req: operations.UpdateAPISpecificationRequest, security: operations.UpdateAPISpecificationSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAPISpecificationResponse>;
    /**
     * Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github
     */
    uploadAPISpecification(req: operations.UploadAPISpecificationRequest, security: operations.UploadAPISpecificationSecurity, config?: AxiosRequestConfig): Promise<operations.UploadAPISpecificationResponse>;
}
