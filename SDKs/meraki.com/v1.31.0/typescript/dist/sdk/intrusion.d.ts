import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Intrusion {
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
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Returns all supported intrusion settings for an organization
     *
     * @remarks
     * Returns all supported intrusion settings for an organization
     */
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * Set the supported intrusion settings for an MX network
     *
     * @remarks
     * Set the supported intrusion settings for an MX network
     */
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Sets supported intrusion settings for an organization
     *
     * @remarks
     * Sets supported intrusion settings for an organization
     */
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
}
