import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * devices - Fetch all available device combinations.
     *
     * Fetch all os devices combinations available on lambdatest platform.
    **/
    devices(req: operations.DevicesRequest, config?: AxiosRequestConfig): Promise<operations.DevicesResponse>;
}
