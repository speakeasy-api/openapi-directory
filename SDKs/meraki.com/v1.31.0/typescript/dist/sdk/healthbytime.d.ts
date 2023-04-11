import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HealthByTime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get application health by time
     *
     * @remarks
     * Get application health by time
     */
    getNetworkInsightApplicationHealthByTime(req: operations.GetNetworkInsightApplicationHealthByTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkInsightApplicationHealthByTimeResponse>;
}
