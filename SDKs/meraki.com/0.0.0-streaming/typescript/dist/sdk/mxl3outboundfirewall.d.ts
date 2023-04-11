import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mxl3OutboundFirewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the L3 firewall rules for an MX network
     *
     * @remarks
     * Return the L3 firewall rules for an MX network
     */
    getNetworkL3FirewallRules(req: operations.GetNetworkL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkL3FirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an MX network
     *
     * @remarks
     * Update the L3 firewall rules of an MX network
     */
    updateNetworkL3FirewallRules(req: operations.UpdateNetworkL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkL3FirewallRulesResponse>;
}
