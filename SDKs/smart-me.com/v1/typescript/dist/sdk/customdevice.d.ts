import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomDevice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all Custom Devices
     *
     * @remarks
     * Gets all Devices
     */
    customDeviceGet(config?: AxiosRequestConfig): Promise<operations.CustomDeviceGetResponse>;
    /**
     * Creates or updates a Custom Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Custom Device or updates it's values.
     *             A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
     *             Only use a custom device for all non meters.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    customDevicePostForm(req: shared.CustomDeviceToPost, config?: AxiosRequestConfig): Promise<operations.CustomDevicePostFormResponse>;
    /**
     * Creates or updates a Custom Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Custom Device or updates it's values.
     *             A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
     *             Only use a custom device for all non meters.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    customDevicePostJson(req: shared.CustomDeviceToPost, config?: AxiosRequestConfig): Promise<operations.CustomDevicePostJsonResponse>;
    /**
     * Creates or updates a Custom Device or updates it's values.
     *
     * @remarks
     * Creates or updates a Custom Device or updates it's values.
     *             A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
     *             Only use a custom device for all non meters.
     *             For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
     *             To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
     */
    customDevicePostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.CustomDevicePostRawResponse>;
    /**
     * Gets a Custom Device by it's ID
     *
     * @remarks
     * Gets a Device by it's ID
     */
    getApiCustomDeviceId(req: operations.GetApiCustomDeviceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCustomDeviceIdResponse>;
}
