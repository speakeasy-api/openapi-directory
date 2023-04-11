import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Returns the total commissions stats.
     */
    getCommissionStats(config?: AxiosRequestConfig): Promise<operations.GetCommissionStatsResponse>;
    /**
     * Returns the total commissions stats by report filter.
     */
    getCommissionStatsByFilter(req: shared.ReportFilter, config?: AxiosRequestConfig): Promise<operations.GetCommissionStatsByFilterResponse>;
    /**
     * View your popular language pairs
     */
    getPopularPairs(config?: AxiosRequestConfig): Promise<operations.GetPopularPairsResponse>;
    /**
     * View your project statistics
     */
    getProjectStats(config?: AxiosRequestConfig): Promise<operations.GetProjectStatsResponse>;
    /**
     * View your translation statistics
     */
    getStringStats(config?: AxiosRequestConfig): Promise<operations.GetStringStatsResponse>;
}
