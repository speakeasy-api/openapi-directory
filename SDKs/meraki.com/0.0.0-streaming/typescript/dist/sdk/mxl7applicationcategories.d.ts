import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mxl7ApplicationCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the L7 firewall application categories and their associated applications for an MX network
     *
     * @remarks
     * Return the L7 firewall application categories and their associated applications for an MX network
     */
    getNetworkL7FirewallRulesApplicationCategories(req: operations.GetNetworkL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkL7FirewallRulesApplicationCategoriesResponse>;
}
