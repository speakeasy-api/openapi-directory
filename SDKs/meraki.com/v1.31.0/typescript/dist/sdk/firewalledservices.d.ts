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
    getNetworkApplianceFirewallFirewalledService(req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * List the appliance services and their accessibility rules
     *
     * @remarks
     * List the appliance services and their accessibility rules
     */
    getNetworkApplianceFirewallFirewalledServices(req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse>;
    /**
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     */
    updateNetworkApplianceFirewallFirewalledService(req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse>;
}
