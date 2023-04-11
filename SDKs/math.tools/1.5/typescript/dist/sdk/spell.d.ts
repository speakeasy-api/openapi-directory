import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Spell out a number ordinal, cardinal or currency. This API is free (rate limited).
 */
export declare class Spell {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the cardinal of the given number
     */
    getNumbersCardinal(req: operations.GetNumbersCardinalRequest, security: operations.GetNumbersCardinalSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersCardinalResponse>;
    /**
     * Spells out the number as a currency
     */
    getNumbersCurrency(req: operations.GetNumbersCurrencyRequest, security: operations.GetNumbersCurrencySecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersCurrencyResponse>;
    /**
     * Get the ordinal of the given number
     */
    getNumbersOrdinal(req: operations.GetNumbersOrdinalRequest, security: operations.GetNumbersOrdinalSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersOrdinalResponse>;
}
