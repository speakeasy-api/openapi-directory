import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OpenapiSpec {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * @remarks
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     */
    getOrganizationOpenapiSpec(req: operations.GetOrganizationOpenapiSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationOpenapiSpecResponse>;
}
