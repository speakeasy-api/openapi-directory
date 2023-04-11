import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mx11NATRules {
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
    getNetworkOneToOneNatRules(req: operations.GetNetworkOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkOneToOneNatRulesResponse>;
    /**
     * Set the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:1 NAT mapping rules for an MX network
     */
    updateNetworkOneToOneNatRules(req: operations.UpdateNetworkOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkOneToOneNatRulesResponse>;
}
