import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXPortForwardingRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the port forwarding rules for an MX network
     *
     * @remarks
     * Return the port forwarding rules for an MX network
     */
    getNetworkPortForwardingRules(req: operations.GetNetworkPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPortForwardingRulesResponse>;
    /**
     * Update the port forwarding rules for an MX network
     *
     * @remarks
     * Update the port forwarding rules for an MX network
     */
    updateNetworkPortForwardingRules(req: operations.UpdateNetworkPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkPortForwardingRulesResponse>;
}
