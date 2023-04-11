import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Uplink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the uplink settings for your MG network.
     *
     * @remarks
     * Returns the uplink settings for your MG network.
     */
    getNetworkCellularGatewayUplink(req: operations.GetNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayUplinkResponse>;
    /**
     * List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MG cellular gateway in the organization
     */
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * Updates the uplink settings for your MG network.
     *
     * @remarks
     * Updates the uplink settings for your MG network.
     */
    updateNetworkCellularGatewayUplink(req: operations.UpdateNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse>;
}
