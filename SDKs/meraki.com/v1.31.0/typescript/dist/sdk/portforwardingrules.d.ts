import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortForwardingRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the port forwarding rules for a single MG.
     *
     * @remarks
     * Returns the port forwarding rules for a single MG.
     */
    getDeviceCellularGatewayPortForwardingRules(req: operations.GetDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Return the port forwarding rules for an MX network
     *
     * @remarks
     * Return the port forwarding rules for an MX network
     */
    getNetworkApplianceFirewallPortForwardingRules(req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * Updates the port forwarding rules for a single MG.
     *
     * @remarks
     * Updates the port forwarding rules for a single MG.
     */
    updateDeviceCellularGatewayPortForwardingRules(req: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Update the port forwarding rules for an MX network
     *
     * @remarks
     * Update the port forwarding rules for an MX network
     */
    updateNetworkApplianceFirewallPortForwardingRules(req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse>;
}
