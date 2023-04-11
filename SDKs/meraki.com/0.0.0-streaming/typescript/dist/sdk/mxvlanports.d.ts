import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXVLANPorts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Return per-port VLAN settings for a single MX port.
     */
    getNetworkAppliancePort(req: operations.GetNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortResponse>;
    /**
     * List per-port VLAN settings for all ports of a MX.
     *
     * @remarks
     * List per-port VLAN settings for all ports of a MX.
     */
    getNetworkAppliancePorts(req: operations.GetNetworkAppliancePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortsResponse>;
    /**
     * Update the per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Update the per-port VLAN settings for a single MX port.
     */
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
}
