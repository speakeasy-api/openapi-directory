import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SwitchAccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the access policies for this network
     *
     * @remarks
     * List the access policies for this network. Only valid for MS networks.
     */
    getNetworkAccessPolicies(req: operations.GetNetworkAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAccessPoliciesResponse>;
}
