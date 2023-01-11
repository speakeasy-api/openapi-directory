import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCommissionStats - Returns the total commissions stats.
    **/
    getCommissionStats(config?: AxiosRequestConfig): Promise<operations.GetCommissionStatsResponse>;
    /**
     * getCommissionStatsByFilter - Returns the total commissions stats by report filter.
    **/
    getCommissionStatsByFilter(req: operations.GetCommissionStatsByFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetCommissionStatsByFilterResponse>;
    /**
     * getPopularPairs - Returns the language pairs that you have ordered most.
    **/
    getPopularPairs(config?: AxiosRequestConfig): Promise<operations.GetPopularPairsResponse>;
    /**
     * getProjectStats - Returns your project statistics.
    **/
    getProjectStats(config?: AxiosRequestConfig): Promise<operations.GetProjectStatsResponse>;
    /**
     * getStringStats - Returns your string statistics.
    **/
    getStringStats(config?: AxiosRequestConfig): Promise<operations.GetStringStatsResponse>;
}
