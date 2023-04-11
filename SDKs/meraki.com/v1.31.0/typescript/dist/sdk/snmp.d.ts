import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snmp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the SNMP settings for a network
     *
     * @remarks
     * Return the SNMP settings for a network
     */
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * Return the SNMP settings for an organization
     *
     * @remarks
     * Return the SNMP settings for an organization
     */
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * Update the SNMP settings for a network
     *
     * @remarks
     * Update the SNMP settings for a network
     */
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
    /**
     * Update the SNMP settings for an organization
     *
     * @remarks
     * Update the SNMP settings for an organization
     */
    updateOrganizationSnmp(req: operations.UpdateOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSnmpResponse>;
}
