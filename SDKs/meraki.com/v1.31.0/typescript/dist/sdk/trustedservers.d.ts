import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TrustedServers {
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
     * Return the list of servers trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse>;
    /**
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     */
    updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
}
