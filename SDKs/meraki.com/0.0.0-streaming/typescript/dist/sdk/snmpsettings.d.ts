import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SNMPSettings {
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
    getNetworkSnmpSettings(req: operations.GetNetworkSnmpSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpSettingsResponse>;
    /**
     * Return the SNMP settings for an organization
     *
     * @remarks
     * Return the SNMP settings for an organization
     */
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
}
