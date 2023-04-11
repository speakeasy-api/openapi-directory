import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdditionalDeviceInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the additional information (e.g. Firmware Version) about a device.
     *
     * @remarks
     * Gets the additional information (e.g. Firmware Version) about a device.
     */
    additionalDeviceInformationGet(req: operations.AdditionalDeviceInformationGetRequest, config?: AxiosRequestConfig): Promise<operations.AdditionalDeviceInformationGetResponse>;
}
