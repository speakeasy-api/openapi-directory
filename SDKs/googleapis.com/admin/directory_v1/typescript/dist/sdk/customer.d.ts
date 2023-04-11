import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets command data a specific command issued to the device.
     */
    adminCustomerDevicesChromeosCommandsGet(req: operations.AdminCustomerDevicesChromeosCommandsGetRequest, security: operations.AdminCustomerDevicesChromeosCommandsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomerDevicesChromeosCommandsGetResponse>;
    /**
     * Issues a command for the device to execute.
     */
    adminCustomerDevicesChromeosIssueCommand(req: operations.AdminCustomerDevicesChromeosIssueCommandRequest, security: operations.AdminCustomerDevicesChromeosIssueCommandSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomerDevicesChromeosIssueCommandResponse>;
}
