import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Two1UserStatisticsOptional {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * User statistice - Daily value - v1/Statistics/individual/daily
     *
     * @remarks
     * User statistice - Daily value - v1/Statistics/individual/daily
     */
    userStatisticeDailyValueV1StatisticsIndividualDaily(req: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest, config?: AxiosRequestConfig): Promise<operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse>;
    /**
     * User statistics - Accumulated value - /v1/Statistics/individual
     *
     * @remarks
     * User statistics - Accumulated value - /v1/Statistics/individual
     */
    userStatisticsAccumulatedValueV1StatisticsIndividual(req: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest, config?: AxiosRequestConfig): Promise<operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse>;
}
