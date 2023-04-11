import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DhcpServerPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     */
    createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     */
    deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Return the DHCP server settings
     *
     * @remarks
     * Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    getNetworkSwitchDhcpServerPolicy(req: operations.GetNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Return the list of servers trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse>;
    /**
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     *
     * @remarks
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse>;
    /**
     * Update the DHCP server settings
     *
     * @remarks
     * Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    updateNetworkSwitchDhcpServerPolicy(req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     */
    updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
}
