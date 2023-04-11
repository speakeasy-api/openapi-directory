import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GetDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch all available device combinations.
     *
     * @remarks
     * Fetch all os devices combinations available on lambdatest platform.
     */
    devices(req: operations.DevicesRequest, security: operations.DevicesSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesResponse>;
}
