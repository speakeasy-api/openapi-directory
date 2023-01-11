import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Healthcheck {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHealthCheck - Get health check status
     *
     * Returns the health status of the application
    **/
    getHealthCheck(config?: AxiosRequestConfig): Promise<operations.GetHealthCheckResponse>;
}
