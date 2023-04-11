import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SwitchPorts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the status for all the ports of a switch
     *
     * @remarks
     * Return the status for all the ports of a switch
     */
    getDeviceSwitchPortStatuses(req: operations.GetDeviceSwitchPortStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortStatusesResponse>;
    /**
     * Return the packet counters for all the ports of a switch
     *
     * @remarks
     * Return the packet counters for all the ports of a switch
     */
    getDeviceSwitchPortStatusesPackets(req: operations.GetDeviceSwitchPortStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortStatusesPacketsResponse>;
}
