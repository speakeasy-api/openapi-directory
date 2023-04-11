import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SyslogServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the syslog servers for a network
     *
     * @remarks
     * List the syslog servers for a network
     */
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * Update the syslog servers for a network
     *
     * @remarks
     * Update the syslog servers for a network
     */
    updateNetworkSyslogServers(req: operations.UpdateNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSyslogServersResponse>;
}
