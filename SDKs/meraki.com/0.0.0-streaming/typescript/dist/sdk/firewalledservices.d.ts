import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FirewalledServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     */
    getNetworkFirewalledService(req: operations.GetNetworkFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirewalledServiceResponse>;
    /**
     * List the appliance services and their accessibility rules
     *
     * @remarks
     * List the appliance services and their accessibility rules
     */
    getNetworkFirewalledServices(req: operations.GetNetworkFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirewalledServicesResponse>;
    /**
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     */
    updateNetworkFirewalledService(req: operations.UpdateNetworkFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirewalledServiceResponse>;
}
