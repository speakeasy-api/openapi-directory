import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Integrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a new access token for MotaWord's integrations service
     *
     * @remarks
     * Generate a new access token for MotaWord's integrations service
     */
    getIntegrationsToken(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsTokenResponse>;
}
