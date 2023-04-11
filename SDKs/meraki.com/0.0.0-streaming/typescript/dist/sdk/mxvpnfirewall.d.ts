import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXVPNFirewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the firewall rules for an organization's site-to-site VPN
     *
     * @remarks
     * Return the firewall rules for an organization's site-to-site VPN
     */
    getOrganizationVpnFirewallRules(req: operations.GetOrganizationVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationVpnFirewallRulesResponse>;
    /**
     * Update the firewall rules of an organization's site-to-site VPN
     *
     * @remarks
     * Update the firewall rules of an organization's site-to-site VPN
     */
    updateOrganizationVpnFirewallRules(req: operations.UpdateOrganizationVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationVpnFirewallRulesResponse>;
}
