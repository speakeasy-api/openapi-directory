import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InboundCellularFirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the inbound cellular firewall rules for an MX network
     *
     * @remarks
     * Return the inbound cellular firewall rules for an MX network
     */
    getNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
    /**
     * Update the inbound cellular firewall rules of an MX network
     *
     * @remarks
     * Update the inbound cellular firewall rules of an MX network
     */
    updateNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
}
