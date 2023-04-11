import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * # Introduction
 *
 * @remarks
 * The methods are required to have an admin authentication.
 *
 * # How to get admin credentials
 * Please create admin credentials in [Datahub](https://userdatahub.com) and use method v1/Auth/Login (1. User management)
 *
 * # Scheme
 * ![Admin statistics integration](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/admin+statistics+integration.png)
 */
export declare class ThreeForBackEndOptional {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /v1/Scorings/consolidated
     *
     * @remarks
     * /v1/Scorings/consolidated
     */
    rootV1ScoringsConsolidated(req: operations.RootV1ScoringsConsolidatedRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedResponse>;
    /**
     * /v1/Scorings/consolidated/daily
     *
     * @remarks
     * /v1/Scorings/consolidated/daily
     */
    rootV1ScoringsConsolidatedDaily(req: operations.RootV1ScoringsConsolidatedDailyRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedDailyResponse>;
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
