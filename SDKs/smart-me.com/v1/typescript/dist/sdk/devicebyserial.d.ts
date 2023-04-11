import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DeviceBySerial {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a Device by it's Serial Number. The Serial is the part before the "-".
     *
     * @remarks
     * Gets a Device by it's Serial Number. The Serial is the part before the "-".
     */
    deviceBySerialGet(req: operations.DeviceBySerialGetRequest, config?: AxiosRequestConfig): Promise<operations.DeviceBySerialGetResponse>;
}
