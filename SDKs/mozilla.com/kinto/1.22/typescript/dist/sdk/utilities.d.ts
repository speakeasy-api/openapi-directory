import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Utilities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    heartbeat(config?: AxiosRequestConfig): Promise<operations.HeartbeatResponse>;
    lbheartbeat(config?: AxiosRequestConfig): Promise<operations.LbheartbeatResponse>;
    version(config?: AxiosRequestConfig): Promise<operations.VersionResponse>;
    contribute(config?: AxiosRequestConfig): Promise<operations.ContributeResponse>;
    getOpenapiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenapiSpecResponse>;
    serverInfo(config?: AxiosRequestConfig): Promise<operations.ServerInfoResponse>;
}
