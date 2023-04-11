import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Global stats
     *
     * @remarks
     * Global stats
     */
    globalStats(config?: AxiosRequestConfig): Promise<operations.GlobalStatsResponse>;
    /**
     * Health
     *
     * @remarks
     * Health
     */
    health(config?: AxiosRequestConfig): Promise<operations.HealthResponse>;
    /**
     * Stats of an index
     *
     * @remarks
     * Stats of an index
     */
    statsOfAnIndex(config?: AxiosRequestConfig): Promise<operations.StatsOfAnIndexResponse>;
    /**
     * Version
     *
     * @remarks
     * Version
     */
    version(config?: AxiosRequestConfig): Promise<operations.VersionResponse>;
}
