import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mx1ManyNATRules {
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
    getNetworkOneToManyNatRules(req: operations.GetNetworkOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkOneToManyNatRulesResponse>;
    /**
     * Set the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:Many NAT mapping rules for an MX network
     */
    updateNetworkOneToManyNatRules(req: operations.UpdateNetworkOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkOneToManyNatRulesResponse>;
}
