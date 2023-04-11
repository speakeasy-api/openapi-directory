import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StatsFindMarketplaceStatistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a timeseries for a particular field
     *
     * @remarks
     * Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
     */
    getStatsSeriesPeriodFields(req: operations.GetStatsSeriesPeriodFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsSeriesPeriodFieldsResponse>;
    /**
     * Returns the total number of events for a particular field.
     */
    getStatsTotal(req: operations.GetStatsTotalRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsTotalResponse>;
    /**
     * Increments a statistics field
     *
     * @remarks
     * increment a statistics field
     */
    postStatsIncrementField(req: operations.PostStatsIncrementFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostStatsIncrementFieldResponse>;
}
