import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cellular {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Return the SIM and APN configurations for a cellular device.
     */
    getDeviceCellularSims(req: operations.GetDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularSimsResponse>;
    /**
     * Updates the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Updates the SIM and APN configurations for a cellular device.
     */
    updateDeviceCellularSims(req: operations.UpdateDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularSimsResponse>;
}
