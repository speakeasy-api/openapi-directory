import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DevicesBySubType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all Devices by it's Sub Type (e.g. E-Charging Station)
     *
     * @remarks
     * Gets all Devices by it's Sub Type (e.g. E-Charging Station)
     */
    devicesBySubTypeGet(req: operations.DevicesBySubTypeGetRequest, config?: AxiosRequestConfig): Promise<operations.DevicesBySubTypeGetResponse>;
}
