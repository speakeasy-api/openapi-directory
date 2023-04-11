import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Additional API Information
 */
export declare class APIInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * API version
     *
     * @remarks
     * Retrieves API Specification version information
     */
    getApiVersion(config?: AxiosRequestConfig): Promise<operations.GetApiVersionResponse>;
    /**
     * Service health
     *
     * @remarks
     * Tests basic health of the service
     */
    getHealth(config?: AxiosRequestConfig): Promise<operations.GetHealthResponse>;
}
