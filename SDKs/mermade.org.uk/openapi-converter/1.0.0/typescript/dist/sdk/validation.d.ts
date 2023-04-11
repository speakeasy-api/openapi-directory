import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Validation functions
 */
export declare class Validation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a redirect to a badge svg file depending on a source definition's validity
     */
    getBadge(req: operations.GetBadgeRequest, config?: AxiosRequestConfig): Promise<operations.GetBadgeResponse>;
    /**
     * Validate an OpenAPI 3.0.x definition supplied in the body of the request
     */
    validate(req: operations.ValidateRequestBody, config?: AxiosRequestConfig): Promise<operations.ValidateResponse>;
    /**
     * Validate an OpenAPI 3.0.x definition
     */
    validateUrl(req: operations.ValidateUrlRequest, config?: AxiosRequestConfig): Promise<operations.ValidateUrlResponse>;
}
