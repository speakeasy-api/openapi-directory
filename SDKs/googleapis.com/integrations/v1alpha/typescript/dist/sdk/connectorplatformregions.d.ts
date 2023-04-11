import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectorPlatformRegions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Enumerates the regions for which Connector Platform is provisioned.
     */
    integrationsConnectorPlatformRegionsEnumerate(req: operations.IntegrationsConnectorPlatformRegionsEnumerateRequest, security: operations.IntegrationsConnectorPlatformRegionsEnumerateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsConnectorPlatformRegionsEnumerateResponse>;
}
