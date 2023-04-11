import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AgeUsd {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Calculates SigRSV exchange
     */
    calcSigmaRsvExchange(req: operations.CalcSigmaRsvExchangeRequest, config?: AxiosRequestConfig): Promise<operations.CalcSigmaRsvExchangeResponse>;
    /**
     * Calculates SigUSD exchange
     */
    calcSigmaUsdExchange(req: operations.CalcSigmaUsdExchangeRequest, config?: AxiosRequestConfig): Promise<operations.CalcSigmaUsdExchangeResponse>;
    /**
     * Builds ErgoPayRequest for SigRSV exchange
     */
    doSigmaRsvExchange(req: operations.DoSigmaRsvExchangeRequest, config?: AxiosRequestConfig): Promise<operations.DoSigmaRsvExchangeResponse>;
    /**
     * Builds ErgoPayRequest for SigUSD exchange
     */
    doSigmaUsdExchange(req: operations.DoSigmaUsdExchangeRequest, config?: AxiosRequestConfig): Promise<operations.DoSigmaUsdExchangeResponse>;
    /**
     * Returns state of AgeUSD at this moment
     */
    getAgeUsdInfo(config?: AxiosRequestConfig): Promise<operations.GetAgeUsdInfoResponse>;
    /**
     * Lists price and available volume for SigmaRSV
     */
    getSigmaRsvPrice(config?: AxiosRequestConfig): Promise<operations.GetSigmaRsvPriceResponse>;
    /**
     * Lists price and available volume for SigmaUSD
     */
    getSigmaUsdPrice(config?: AxiosRequestConfig): Promise<operations.GetSigmaUsdPriceResponse>;
}
