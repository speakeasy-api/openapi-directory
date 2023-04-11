import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConsolidatedStatistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /v1/Statistics/consolidated
     *
     * @remarks
     * /v1/Statistics/consolidated
     */
    rootV1StatisticsConsolidated(req: operations.RootV1StatisticsConsolidatedRequest, config?: AxiosRequestConfig): Promise<operations.RootV1StatisticsConsolidatedResponse>;
    /**
     * /v1/Statistics/consolidated/daily
     *
     * @remarks
     * /v1/Statistics/consolidated/daily
     */
    rootV1StatisticsConsolidatedDaily(req: operations.RootV1StatisticsConsolidatedDailyRequest, config?: AxiosRequestConfig): Promise<operations.RootV1StatisticsConsolidatedDailyResponse>;
}
