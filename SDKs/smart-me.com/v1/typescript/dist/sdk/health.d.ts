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
    /**
     * A method returning HTTP 200 OK when queried.
     *             It is used by Kubernetes probes to determine whether the app is healthy.
     */
    healthGet(config?: AxiosRequestConfig): Promise<operations.HealthGetResponse>;
}
