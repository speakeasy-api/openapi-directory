import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserAccessDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a User Access Device
     *
     * @remarks
     * Delete a User Access Device
     */
    deleteNetworkSmUserAccessDevice(req: operations.DeleteNetworkSmUserAccessDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmUserAccessDeviceResponse>;
    /**
     * List User Access Devices and its Trusted Access Connections
     *
     * @remarks
     * List User Access Devices and its Trusted Access Connections
     */
    getNetworkSmUserAccessDevices(req: operations.GetNetworkSmUserAccessDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserAccessDevicesResponse>;
}
