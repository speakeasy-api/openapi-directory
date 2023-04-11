import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create device
     *
     * @remarks
     * Adds a new device to a user, if the same device already exists the call will have no effect
     */
    createDevice(req: shared.CreateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceResponse>;
    /**
     * Delete device
     *
     * @remarks
     * Deletes device
     */
    deleteDevice(req: operations.DeleteDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceResponse>;
    /**
     * List devices
     *
     * @remarks
     * Returns all available devices
     */
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
}
