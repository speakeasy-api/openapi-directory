import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateDeviceCode
     *
     * @remarks
     * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
     * terminal mode.
     */
    createDeviceCode(req: shared.CreateDeviceCodeRequest, security: operations.CreateDeviceCodeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDeviceCodeResponse>;
    /**
     * GetDeviceCode
     *
     * @remarks
     * Retrieves DeviceCode with the associated ID.
     */
    getDeviceCode(req: operations.GetDeviceCodeRequest, security: operations.GetDeviceCodeSecurity, config?: AxiosRequestConfig): Promise<operations.GetDeviceCodeResponse>;
    /**
     * ListDeviceCodes
     *
     * @remarks
     * Lists all DeviceCodes associated with the merchant.
     */
    listDeviceCodes(req: operations.ListDeviceCodesRequest, security: operations.ListDeviceCodesSecurity, config?: AxiosRequestConfig): Promise<operations.ListDeviceCodesResponse>;
}
