import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UptimeCheckIps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the list of IP addresses that checkers run from
     */
    monitoringUptimeCheckIpsList(req: operations.MonitoringUptimeCheckIpsListRequest, security: operations.MonitoringUptimeCheckIpsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringUptimeCheckIpsListResponse>;
}
