import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PingDevice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Enqueue a job to check connectivity status to the device
     *
     * @remarks
     * Enqueue a job to check connectivity status to the device
     */
    createDeviceLiveToolsPingDevice(req: operations.CreateDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingDeviceResponse>;
    /**
     * Return a ping device job
     *
     * @remarks
     * Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPingDevice(req: operations.GetDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingDeviceResponse>;
}
