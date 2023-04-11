import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Currencies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get historical prices for requested currency pairs
     *
     * @remarks
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     */
    currenciesHistoryGET(req: operations.CurrenciesHistoryGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesHistoryGETResponse>;
    /**
     * Get latest mid rate for requested currency pairs
     *
     * @remarks
     * Current Mid Rate
     */
    currenciesRateGET(req: operations.CurrenciesRateGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesRateGETResponse>;
    /**
     * Get latest Summary for requested currency pairs
     *
     * @remarks
     * Current and daily summary information combined into a single quote
     */
    currenciesSummaryGET(req: operations.CurrenciesSummaryGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesSummaryGETResponse>;
    /**
     * Get list of currency pairs supported by the history endpoint
     *
     * @remarks
     * Only the currency pairs in the direction noted can be used with the history endpoint.
     * For example: USD/CAD is not the same as CAD/USD
     */
    currenciesSupportedCurrenciesHistoryGET(req: operations.CurrenciesSupportedCurrenciesHistoryGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesSupportedCurrenciesHistoryGETResponse>;
    /**
     * Get list of currencies supported by the rate endpoint
     *
     * @remarks
     * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
     * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
     */
    currenciesSupportedCurrenciesRateGET(req: operations.CurrenciesSupportedCurrenciesRateGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesSupportedCurrenciesRateGETResponse>;
    /**
     * Get list of currency pairs supported by the Summary endpoint
     *
     * @remarks
     * Only the currency pairs in the direction noted can be used with the Summary endpoint.
     * For example: USD/CAD is not the same as CAD/USD
     */
    currenciesSupportedCurrenciesSummaryGET(req: operations.CurrenciesSupportedCurrenciesSummaryGETRequest, config?: AxiosRequestConfig): Promise<operations.CurrenciesSupportedCurrenciesSummaryGETResponse>;
}
