import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PicoLoadmanagementSetDynamicCurrent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sets the dynamic current of a load management group or a single station.
     */
    picoLoadmanagementSetDynamicCurrentPost(req: operations.PicoLoadmanagementSetDynamicCurrentPostRequest, config?: AxiosRequestConfig): Promise<operations.PicoLoadmanagementSetDynamicCurrentPostResponse>;
}
