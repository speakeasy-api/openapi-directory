import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Security {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the security events for a client
     *
     * @remarks
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * List the security events for a network
     *
     * @remarks
     * List the security events for a network
     */
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * Returns all supported intrusion settings for an MX network
     *
     * @remarks
     * Returns all supported intrusion settings for an MX network
     */
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Returns all supported malware settings for an MX network
     *
     * @remarks
     * Returns all supported malware settings for an MX network
     */
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * List the security events for an organization
     *
     * @remarks
     * List the security events for an organization
     */
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
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
     * Set the supported malware settings for an MX network
     *
     * @remarks
     * Set the supported malware settings for an MX network
     */
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * Sets supported intrusion settings for an organization
     *
     * @remarks
     * Sets supported intrusion settings for an organization
     */
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
}
