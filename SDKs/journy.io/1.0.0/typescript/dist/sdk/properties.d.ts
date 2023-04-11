import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for listing properties.
 */
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get account properties
     *
     * @remarks
     * Endpoint to list account properties.
     */
    getAccountProperties(config?: AxiosRequestConfig): Promise<operations.GetAccountPropertiesResponse>;
    /**
     * Get user properties
     *
     * @remarks
     * Endpoint to list user properties.
     */
    getUserProperties(config?: AxiosRequestConfig): Promise<operations.GetUserPropertiesResponse>;
}
