import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi health status
 */
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return current Otoroshi health
     *
     * @remarks
     * Import the full state of Otoroshi as a file
     */
    health(config?: AxiosRequestConfig): Promise<operations.HealthResponse>;
}
