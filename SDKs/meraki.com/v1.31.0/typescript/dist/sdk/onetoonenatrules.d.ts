import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OneToOneNatRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:1 NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * Set the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:1 NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
}
