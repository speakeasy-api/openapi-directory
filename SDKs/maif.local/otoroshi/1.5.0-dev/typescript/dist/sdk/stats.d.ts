import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi stats
 */
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get global otoroshi stats
     *
     * @remarks
     * Get global otoroshi stats
     */
    globalLiveStats(config?: AxiosRequestConfig): Promise<operations.GlobalLiveStatsResponse>;
    /**
     * Get live feed of otoroshi stats
     *
     * @remarks
     * Get live feed of global otoroshi stats (global) or for a service {id}
     */
    serviceLiveStats(req: operations.ServiceLiveStatsRequest, security: operations.ServiceLiveStatsSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceLiveStatsResponse>;
}
