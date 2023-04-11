import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OneToManyNatRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:Many NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * Set the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:Many NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
}
