import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FastSendDeviceValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Force a device to send the data every second (if supported). This for about 30s.
     *             Don't use this call to force a device to send the data every second for a longer time.
     */
    fastSendDeviceValuesGet(req: operations.FastSendDeviceValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.FastSendDeviceValuesGetResponse>;
}
