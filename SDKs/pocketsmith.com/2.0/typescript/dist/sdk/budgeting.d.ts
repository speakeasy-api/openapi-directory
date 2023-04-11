import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Budgeting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete forecast cache for user
     *
     * @remarks
     * Delete the user's cached forecast by recalculating the forecast.
     */
    deleteUsersIdForecastCache(req: operations.DeleteUsersIdForecastCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdForecastCacheResponse>;
    /**
     * List budget for user
     *
     * @remarks
     * Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
     */
    getUsersIdBudget(req: operations.GetUsersIdBudgetRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdBudgetResponse>;
    /**
     * Get budget summary for user
     *
     * @remarks
     * Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
     */
    getUsersIdBudgetSummary(req: operations.GetUsersIdBudgetSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdBudgetSummaryResponse>;
    /**
     * Get trend analysis for user
     *
     * @remarks
     * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
     */
    getUsersIdTrendAnalysis(req: operations.GetUsersIdTrendAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTrendAnalysisResponse>;
}
