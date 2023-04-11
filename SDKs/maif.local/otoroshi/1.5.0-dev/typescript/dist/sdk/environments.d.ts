import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi Environments
 */
export declare class Environments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all environments
     *
     * @remarks
     * Get all environments provided by the current Otoroshi instance
     */
    allLines(config?: AxiosRequestConfig): Promise<operations.AllLinesResponse>;
    /**
     * Get all services for an environment
     *
     * @remarks
     * Get all services for an environment provided by the current Otoroshi instance
     */
    servicesForALine(req: operations.ServicesForALineRequest, security: operations.ServicesForALineSecurity, config?: AxiosRequestConfig): Promise<operations.ServicesForALineResponse>;
}
