import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Currencies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiVVersionCurrenciesHistory - Get historical prices for requested currency pairs
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    getApiVVersionCurrenciesHistory(req: operations.GetApiVVersionCurrenciesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistoryResponse>;
    /**
     * getApiVVersionCurrenciesHistorySupported - Get list of currency pairs supported by the history endpoint
     *
     * Only the currency pairs in the direction noted can be used with the history endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    getApiVVersionCurrenciesHistorySupported(req: operations.GetApiVVersionCurrenciesHistorySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistorySupportedResponse>;
    /**
     * getApiVVersionCurrenciesRate - Get latest mid rate for requested currency pairs
     *
     * Current Mid Rate
    **/
    getApiVVersionCurrenciesRate(req: operations.GetApiVVersionCurrenciesRateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateResponse>;
    /**
     * getApiVVersionCurrenciesRateSupported - Get list of currencies supported by the rate endpoint
     *
     * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
     * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
    **/
    getApiVVersionCurrenciesRateSupported(req: operations.GetApiVVersionCurrenciesRateSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateSupportedResponse>;
    /**
     * getApiVVersionCurrenciesSummary - Get latest Summary for requested currency pairs
     *
     * Current and daily summary information combined into a single quote
    **/
    getApiVVersionCurrenciesSummary(req: operations.GetApiVVersionCurrenciesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummaryResponse>;
    /**
     * getApiVVersionCurrenciesSummarySupported - Get list of currency pairs supported by the Summary endpoint
     *
     * Only the currency pairs in the direction noted can be used with the Summary endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    getApiVVersionCurrenciesSummarySupported(req: operations.GetApiVVersionCurrenciesSummarySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummarySupportedResponse>;
}
