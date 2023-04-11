import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ByClient {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get policies for all clients with policies
     *
     * @remarks
     * Get policies for all clients with policies
     */
    getNetworkPoliciesByClient(req: operations.GetNetworkPoliciesByClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPoliciesByClientResponse>;
}
