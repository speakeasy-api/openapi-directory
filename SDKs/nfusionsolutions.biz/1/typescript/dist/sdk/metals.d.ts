import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Metals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get historical benchmark prices for requested metals
     *
     * @remarks
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
     */
    metalsBenchmarkHistoryGET(req: operations.MetalsBenchmarkHistoryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsBenchmarkHistoryGETResponse>;
    /**
     * Get latest Benchmark prices for requested metals
     *
     * @remarks
     * Benchmark price information
     */
    metalsBenchmarkSummaryGET(req: operations.MetalsBenchmarkSummaryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsBenchmarkSummaryGETResponse>;
    /**
     * Get list of symbols supported by the benchmark endpoints
     */
    metalsBenchmarkSupportedMetalsGET(req: operations.MetalsBenchmarkSupportedMetalsGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsBenchmarkSupportedMetalsGETResponse>;
    /**
     * Get Historical Annual Performance for requested metals
     *
     * @remarks
     * Annual Historical Performance information
     */
    metalsSpotAnnualHistoricalPerformanceGET(req: operations.MetalsSpotAnnualHistoricalPerformanceGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotAnnualHistoricalPerformanceGETResponse>;
    /**
     * Get Historical Performance for requested metals
     *
     * @remarks
     * Historical Performance information
     */
    metalsSpotHistoricalPerformanceGET(req: operations.MetalsSpotHistoricalPerformanceGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotHistoricalPerformanceGETResponse>;
    /**
     * Get historical Spot prices for requested metals
     *
     * @remarks
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
     */
    metalsSpotHistoryGET(req: operations.MetalsSpotHistoryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotHistoryGETResponse>;
    /**
     * Get historical Spot Ratio prices for requested metals
     *
     * @remarks
     * Historical data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     */
    metalsSpotRatioHistoryGET(req: operations.MetalsSpotRatioHistoryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotRatioHistoryGETResponse>;
    /**
     * Get latest Spot Summary for requested metal ratios
     *
     * @remarks
     * Ratios between prices of two metals
     */
    metalsSpotRatioSummaryGET(req: operations.MetalsSpotRatioSummaryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotRatioSummaryGETResponse>;
    /**
     * Get latest Spot Summary for requested metals
     *
     * @remarks
     * Current and daily summary information combined into a single quote
     */
    metalsSpotSummaryGET(req: operations.MetalsSpotSummaryGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotSummaryGETResponse>;
    /**
     * Get list of symbols supported by the spot endpoints
     */
    metalsSpotSupportedMetalsGET(req: operations.MetalsSpotSupportedMetalsGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSpotSupportedMetalsGETResponse>;
    /**
     * Get list of currencies supported by metals endpoints for currency conversion
     */
    metalsSupportedCurrenciesMetalsGET(req: operations.MetalsSupportedCurrenciesMetalsGETRequest, config?: AxiosRequestConfig): Promise<operations.MetalsSupportedCurrenciesMetalsGETResponse>;
}
