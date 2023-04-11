import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FloodlightConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one floodlight configuration by ID.
     */
    dfareportingFloodlightConfigurationsGet(req: operations.DfareportingFloodlightConfigurationsGetRequest, security: operations.DfareportingFloodlightConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsGetResponse>;
    /**
     * Retrieves a list of floodlight configurations, possibly filtered.
     */
    dfareportingFloodlightConfigurationsList(req: operations.DfareportingFloodlightConfigurationsListRequest, security: operations.DfareportingFloodlightConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsListResponse>;
    /**
     * Updates an existing floodlight configuration. This method supports patch semantics.
     */
    dfareportingFloodlightConfigurationsPatch(req: operations.DfareportingFloodlightConfigurationsPatchRequest, security: operations.DfareportingFloodlightConfigurationsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsPatchResponse>;
    /**
     * Updates an existing floodlight configuration.
     */
    dfareportingFloodlightConfigurationsUpdate(req: operations.DfareportingFloodlightConfigurationsUpdateRequest, security: operations.DfareportingFloodlightConfigurationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsUpdateResponse>;
}
