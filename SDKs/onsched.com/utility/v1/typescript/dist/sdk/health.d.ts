import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getUtilityV1HealthHeartbeat(config?: AxiosRequestConfig): Promise<operations.GetUtilityV1HealthHeartbeatResponse>;
    getUtilityV1HealthThreadinfo(config?: AxiosRequestConfig): Promise<operations.GetUtilityV1HealthThreadinfoResponse>;
}
