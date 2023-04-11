import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsageHistories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the usage histories for clients
     *
     * @remarks
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
}
