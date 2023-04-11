import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Global Search
 */
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Resources by search query
     *
     * @remarks
     * Global search
     */
    getResourcesJson(req: operations.GetResourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesJsonResponse>;
}
