import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://football-prediction-api.p.rapidapi.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Returns an array of all the available federations.
     */
    getApiV2ListFederations(req: operations.GetApiV2ListFederationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListFederationsResponse>;
    /**
     * Returns an array of all the supported prediction markets
     */
    getApiV2ListMarkets(req: operations.GetApiV2ListMarketsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ListMarketsResponse>;
    /**
     * Returns predictions accuracy in the last 1, 7, 14, 30 days.
     */
    getApiV2PerformanceStats(req: operations.GetApiV2PerformanceStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PerformanceStatsResponse>;
    /**
     * This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
     */
    getApiV2Predictions(req: operations.GetApiV2PredictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsResponse>;
    /**
     * Returns all predictions available for a match id.
     */
    getApiV2PredictionsId(req: operations.GetApiV2PredictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PredictionsIdResponse>;
}
