import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DevicesByEnergy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all Devices for an Energy Type
     *
     * @remarks
     * Gets all Devices for an Energy Type
     */
    devicesByEnergyGet(req: operations.DevicesByEnergyGetRequest, config?: AxiosRequestConfig): Promise<operations.DevicesByEnergyGetResponse>;
}
