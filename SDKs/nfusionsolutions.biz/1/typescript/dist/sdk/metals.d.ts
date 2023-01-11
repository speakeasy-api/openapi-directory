import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiVVersionMetalsBenchmarkHistory - Get historical benchmark prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    getApiVVersionMetalsBenchmarkHistory(req: operations.GetApiVVersionMetalsBenchmarkHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkHistoryResponse>;
    /**
     * getApiVVersionMetalsBenchmarkSummary - Get latest Benchmark prices for requested metals
     *
     * Benchmark price information
    **/
    getApiVVersionMetalsBenchmarkSummary(req: operations.GetApiVVersionMetalsBenchmarkSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSummaryResponse>;
    /**
     * getApiVVersionMetalsBenchmarkSupported - Get list of symbols supported by the benchmark endpoints
    **/
    getApiVVersionMetalsBenchmarkSupported(req: operations.GetApiVVersionMetalsBenchmarkSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSupportedResponse>;
    /**
     * getApiVVersionMetalsSpotHistory - Get historical Spot prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    getApiVVersionMetalsSpotHistory(req: operations.GetApiVVersionMetalsSpotHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotHistoryResponse>;
    /**
     * getApiVVersionMetalsSpotPerformance - Get Historical Performance for requested metals
     *
     * Historical Performance information
    **/
    getApiVVersionMetalsSpotPerformance(req: operations.GetApiVVersionMetalsSpotPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceResponse>;
    /**
     * getApiVVersionMetalsSpotPerformanceAnnual - Get Historical Annual Performance for requested metals
     *
     * Annual Historical Performance information
    **/
    getApiVVersionMetalsSpotPerformanceAnnual(req: operations.GetApiVVersionMetalsSpotPerformanceAnnualRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse>;
    /**
     * getApiVVersionMetalsSpotRatioHistory - Get historical Spot Ratio prices for requested metals
     *
     * Historical data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    getApiVVersionMetalsSpotRatioHistory(req: operations.GetApiVVersionMetalsSpotRatioHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioHistoryResponse>;
    /**
     * getApiVVersionMetalsSpotRatioSummary - Get latest Spot Summary for requested metal ratios
     *
     * Ratios between prices of two metals
    **/
    getApiVVersionMetalsSpotRatioSummary(req: operations.GetApiVVersionMetalsSpotRatioSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioSummaryResponse>;
    /**
     * getApiVVersionMetalsSpotSummary - Get latest Spot Summary for requested metals
     *
     * Current and daily summary information combined into a single quote
    **/
    getApiVVersionMetalsSpotSummary(req: operations.GetApiVVersionMetalsSpotSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSummaryResponse>;
    /**
     * getApiVVersionMetalsSpotSupported - Get list of symbols supported by the spot endpoints
    **/
    getApiVVersionMetalsSpotSupported(req: operations.GetApiVVersionMetalsSpotSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSupportedResponse>;
    /**
     * getApiVVersionMetalsSupportedCurrency - Get list of currencies supported by metals endpoints for currency conversion
    **/
    getApiVVersionMetalsSupportedCurrency(req: operations.GetApiVVersionMetalsSupportedCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSupportedCurrencyResponse>;
}
