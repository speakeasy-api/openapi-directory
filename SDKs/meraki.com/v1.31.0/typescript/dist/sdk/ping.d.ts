import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Enqueue a job to ping a target host from the device
     *
     * @remarks
     * Enqueue a job to ping a target host from the device
     */
    createDeviceLiveToolsPing(req: operations.CreateDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingResponse>;
    /**
     * Return a ping job
     *
     * @remarks
     * Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPing(req: operations.GetDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingResponse>;
}
