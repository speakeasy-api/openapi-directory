import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class IntrusionSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all supported intrusion settings for an MX network
     *
     * @remarks
     * Returns all supported intrusion settings for an MX network
     */
    getNetworkSecurityIntrusionSettings(req: operations.GetNetworkSecurityIntrusionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSecurityIntrusionSettingsResponse>;
    /**
     * Returns all supported intrusion settings for an organization
     *
     * @remarks
     * Returns all supported intrusion settings for an organization
     */
    getOrganizationSecurityIntrusionSettings(req: operations.GetOrganizationSecurityIntrusionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSecurityIntrusionSettingsResponse>;
    /**
     * Set the supported intrusion settings for an MX network
     *
     * @remarks
     * Set the supported intrusion settings for an MX network
     */
    updateNetworkSecurityIntrusionSettings(req: operations.UpdateNetworkSecurityIntrusionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSecurityIntrusionSettingsResponse>;
    /**
     * Sets supported intrusion settings for an organization
     *
     * @remarks
     * Sets supported intrusion settings for an organization
     */
    updateOrganizationSecurityIntrusionSettings(req: operations.UpdateOrganizationSecurityIntrusionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSecurityIntrusionSettingsResponse>;
}
