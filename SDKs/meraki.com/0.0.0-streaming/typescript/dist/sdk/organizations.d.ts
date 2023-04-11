import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Claim a list of devices, licenses, and/or orders into an organization
     *
     * @remarks
     * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
     */
    claimIntoOrganization(req: operations.ClaimIntoOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationResponse>;
    /**
     * Create a new organization by cloning the addressed organization
     *
     * @remarks
     * Create a new organization by cloning the addressed organization
     */
    cloneOrganization(req: operations.CloneOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationResponse>;
    /**
     * Return an organization
     *
     * @remarks
     * Return an organization
     */
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * List the status of every Meraki device in the organization
     *
     * @remarks
     * List the status of every Meraki device in the organization
     */
    getOrganizationDeviceStatuses(req: operations.GetOrganizationDeviceStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDeviceStatusesResponse>;
    /**
     * Return the inventory for an organization
     *
     * @remarks
     * Return the inventory for an organization
     */
    getOrganizationInventory(req: operations.GetOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryResponse>;
    /**
     * Return the third party VPN peers for an organization
     *
     * @remarks
     * Return the third party VPN peers for an organization
     */
    getOrganizationThirdPartyVPNPeers(req: operations.GetOrganizationThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationThirdPartyVPNPeersResponse>;
    /**
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * @remarks
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     */
    getOrganizationUplinksLossAndLatency(req: operations.GetOrganizationUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksLossAndLatencyResponse>;
    /**
     * List the organizations that the user has privileges on
     *
     * @remarks
     * List the organizations that the user has privileges on
     */
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * Update the third party VPN peers for an organization
     *
     * @remarks
     * Update the third party VPN peers for an organization
     */
    updateOrganizationThirdPartyVPNPeers(req: operations.UpdateOrganizationThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationThirdPartyVPNPeersResponse>;
}
