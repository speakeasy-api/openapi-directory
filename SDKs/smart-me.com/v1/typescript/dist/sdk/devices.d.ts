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
     * Gets all Devices
     *
     * @remarks
     * Gets all Devices
     */
    devicesGet(config?: AxiosRequestConfig): Promise<operations.DevicesGetResponse>;
    /**
     * Creates or updates a Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Device or updates it's values.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    devicesPostForm(req: shared.DeviceToPost, config?: AxiosRequestConfig): Promise<operations.DevicesPostFormResponse>;
    /**
     * Creates or updates a Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Device or updates it's values.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    devicesPostJson(req: shared.DeviceToPost, config?: AxiosRequestConfig): Promise<operations.DevicesPostJsonResponse>;
    /**
     * Creates or updates a Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Device or updates it's values.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    devicesPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.DevicesPostRawResponse>;
    /**
     * Updates the On/Off Switch on a device.
     *             For new implementations please use the "actions" command
     *
     * @remarks
     * Updates the On/Off Switch on a device
     *             For new implementations please use the "actions" command
     */
    devicesPut(req: operations.DevicesPutRequest, config?: AxiosRequestConfig): Promise<operations.DevicesPutResponse>;
    /**
     * Gets a Device by it's ID
     *
     * @remarks
     * Gets a Device by it's ID
     */
    getApiDevicesId(req: operations.GetApiDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiDevicesIdResponse>;
}
