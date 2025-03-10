import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * List available and installed integrations
 */
export declare class Integrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Integrations available and installed in the account
     */
    getIntegrations(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsResponse>;
    /**
     * Integrations available and installed for the target
     */
    getTargetsTargetIdIntegrations(req: operations.GetTargetsTargetIdIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsResponse>;
}
