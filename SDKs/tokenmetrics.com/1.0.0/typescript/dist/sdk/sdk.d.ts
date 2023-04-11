import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.tokenmetrics.com"];
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
     * Correlation
     *
     * @remarks
     * Correlation
     */
    correlation(req: operations.CorrelationRequest, config?: AxiosRequestConfig): Promise<operations.CorrelationResponse>;
    /**
     * Indices
     *
     * @remarks
     * Indices
     */
    indices(req: operations.IndicesRequest, config?: AxiosRequestConfig): Promise<operations.IndicesResponse>;
    /**
     * Investor Grades
     *
     * @remarks
     * Investor Grades
     */
    investorGrades(req: operations.InvestorGradesRequest, config?: AxiosRequestConfig): Promise<operations.InvestorGradesResponse>;
    /**
     * Market Indicator
     *
     * @remarks
     * Market Indicator
     */
    marketIndicator(req: operations.MarketIndicatorRequest, config?: AxiosRequestConfig): Promise<operations.MarketIndicatorResponse>;
    /**
     * Price
     *
     * @remarks
     * Price
     */
    price(req: operations.PriceRequest, config?: AxiosRequestConfig): Promise<operations.PriceResponse>;
    /**
     * Price Prediction
     *
     * @remarks
     * Price Prediction
     */
    pricePrediction(req: operations.PricePredictionRequest, config?: AxiosRequestConfig): Promise<operations.PricePredictionResponse>;
    /**
     * Quantmetrics Tier 1
     *
     * @remarks
     * Quantmetrics Tier 1
     */
    quantmetricsTier1(req: operations.QuantmetricsTier1Request, config?: AxiosRequestConfig): Promise<operations.QuantmetricsTier1Response>;
    /**
     * Quantmetrics Tier 2
     *
     * @remarks
     * Quantmetrics Tier 2
     */
    quantmetricsTier2(req: operations.QuantmetricsTier2Request, config?: AxiosRequestConfig): Promise<operations.QuantmetricsTier2Response>;
    /**
     * Resistance & Support
     *
     * @remarks
     * Resistance & Support
     */
    resistanceSupport(req: operations.ResistanceSupportRequest, config?: AxiosRequestConfig): Promise<operations.ResistanceSupportResponse>;
    /**
     * Scenario Analysis
     *
     * @remarks
     * Scenario Analysis
     */
    scenarioAnalysis(req: operations.ScenarioAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.ScenarioAnalysisResponse>;
    /**
     * Sentiments
     *
     * @remarks
     * Sentiments
     */
    sentiments(req: operations.SentimentsRequest, config?: AxiosRequestConfig): Promise<operations.SentimentsResponse>;
    /**
     * Tokens
     *
     * @remarks
     * Tokens
     */
    tokens(req: operations.TokensRequest, config?: AxiosRequestConfig): Promise<operations.TokensResponse>;
    /**
     * Trader Grades
     *
     * @remarks
     * Trader Grades
     */
    traderGrades(req: operations.TraderGradesRequest, config?: AxiosRequestConfig): Promise<operations.TraderGradesResponse>;
    /**
     * Trading Indicator
     *
     * @remarks
     * Trading Indicator
     */
    tradingIndicator(req: operations.TradingIndicatorRequest, config?: AxiosRequestConfig): Promise<operations.TradingIndicatorResponse>;
}
