import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AuthenticationToken {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a new vMX authentication token
     *
     * @remarks
     * Generate a new vMX authentication token
     */
    createDeviceApplianceVmxAuthenticationToken(req: operations.CreateDeviceApplianceVmxAuthenticationTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceApplianceVmxAuthenticationTokenResponse>;
}
