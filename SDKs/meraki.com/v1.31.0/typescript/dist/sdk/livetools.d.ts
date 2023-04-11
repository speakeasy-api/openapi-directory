import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Blink the LEDs on a device
     *
     * @remarks
     * Blink the LEDs on a device
     */
    blinkDeviceLeds(req: operations.BlinkDeviceLedsRequest, config?: AxiosRequestConfig): Promise<operations.BlinkDeviceLedsResponse>;
    /**
     * Enqueue a job to ping a target host from the device
     *
     * @remarks
     * Enqueue a job to ping a target host from the device
     */
    createDeviceLiveToolsPing(req: operations.CreateDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingResponse>;
    /**
     * Enqueue a job to check connectivity status to the device
     *
     * @remarks
     * Enqueue a job to check connectivity status to the device
     */
    createDeviceLiveToolsPingDevice(req: operations.CreateDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingDeviceResponse>;
    /**
     * Cycle a set of switch ports
     *
     * @remarks
     * Cycle a set of switch ports
     */
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * Return a ping job
     *
     * @remarks
     * Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPing(req: operations.GetDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingResponse>;
    /**
     * Return a ping device job
     *
     * @remarks
     * Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPingDevice(req: operations.GetDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingDeviceResponse>;
    /**
     * Reboot a device
     *
     * @remarks
     * Reboot a device
     */
    rebootDevice(req: operations.RebootDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RebootDeviceResponse>;
}
