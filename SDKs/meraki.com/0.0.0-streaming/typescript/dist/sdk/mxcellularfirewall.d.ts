import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXCellularFirewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the cellular firewall rules for an MX network
     *
     * @remarks
     * Return the cellular firewall rules for an MX network
     */
    getNetworkCellularFirewallRules(req: operations.GetNetworkCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularFirewallRulesResponse>;
    /**
     * Update the cellular firewall rules of an MX network
     *
     * @remarks
     * Update the cellular firewall rules of an MX network
     */
    updateNetworkCellularFirewallRules(req: operations.UpdateNetworkCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularFirewallRulesResponse>;
}
