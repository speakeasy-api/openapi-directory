import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SmartMeDeviceConfiguration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the configuration of a smart-me device.
     */
    smartMeDeviceConfigurationGet(req: operations.SmartMeDeviceConfigurationGetRequest, config?: AxiosRequestConfig): Promise<operations.SmartMeDeviceConfigurationGetResponse>;
    /**
     * Sets the configuration of a smart-me device. The device needs to be online.
     */
    smartMeDeviceConfigurationPostForm(req: shared.SmartMeDeviceConfigurationContainer, config?: AxiosRequestConfig): Promise<operations.SmartMeDeviceConfigurationPostFormResponse>;
    /**
     * Sets the configuration of a smart-me device. The device needs to be online.
     */
    smartMeDeviceConfigurationPostJson(req: shared.SmartMeDeviceConfigurationContainer, config?: AxiosRequestConfig): Promise<operations.SmartMeDeviceConfigurationPostJsonResponse>;
    /**
     * Sets the configuration of a smart-me device. The device needs to be online.
     */
    smartMeDeviceConfigurationPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.SmartMeDeviceConfigurationPostRawResponse>;
}
