import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ethernet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Endpoint to see power status for wireless devices
     *
     * @remarks
     * Endpoint to see power status for wireless devices
     */
    getOrganizationWirelessDevicesEthernetStatuses(req: operations.GetOrganizationWirelessDevicesEthernetStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWirelessDevicesEthernetStatusesResponse>;
}
