import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Device management
 */
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Device
     */
    deleteDevicesId(req: operations.DeleteDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevicesIdResponse>;
    /**
     * Fetch a list of Devices
     *
     * @remarks
     * Without any params, returns a list of the user's devices
     */
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * Create a Device
     */
    postDevices(req: shared.Device, config?: AxiosRequestConfig): Promise<operations.PostDevicesResponse>;
    /**
     * Update a Device
     */
    putDevicesId(req: operations.PutDevicesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDevicesIdResponse>;
    /**
     * Update total distance and hours of the Device
     */
    putDevicesIdAccumulators(req: operations.PutDevicesIdAccumulatorsRequest, config?: AxiosRequestConfig): Promise<operations.PutDevicesIdAccumulatorsResponse>;
}
