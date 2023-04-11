import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V4 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     *
     * @remarks
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     */
    getNetworkSwitchDhcpV4ServersSeen(req: operations.GetNetworkSwitchDhcpV4ServersSeenRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpV4ServersSeenResponse>;
}
