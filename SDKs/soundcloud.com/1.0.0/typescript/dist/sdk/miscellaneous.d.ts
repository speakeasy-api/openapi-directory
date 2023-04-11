import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Miscellaneous Endpoints.
 */
export declare class Miscellaneous {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Resolves soundcloud.com URLs to Resource URLs to use with the API.
     */
    getResolve(req: operations.GetResolveRequest, security: operations.GetResolveSecurity, config?: AxiosRequestConfig): Promise<operations.GetResolveResponse>;
}
