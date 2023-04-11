import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mxl7Firewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the MX L7 firewall rules for an MX network
     *
     * @remarks
     * List the MX L7 firewall rules for an MX network
     */
    getNetworkL7FirewallRules(req: operations.GetNetworkL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkL7FirewallRulesResponse>;
    /**
     * Update the MX L7 firewall rules for an MX network
     *
     * @remarks
     * Update the MX L7 firewall rules for an MX network
     */
    updateNetworkL7FirewallRules(req: operations.UpdateNetworkL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkL7FirewallRulesResponse>;
}
