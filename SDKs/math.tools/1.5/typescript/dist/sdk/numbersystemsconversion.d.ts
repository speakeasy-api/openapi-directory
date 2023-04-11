import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Convert from one number system to another.
 */
export declare class NumberSystemsConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert base 10 representation of a given number to chinese numeral.
     */
    getNumbersNumeralChinese(req: operations.GetNumbersNumeralChineseRequest, security: operations.GetNumbersNumeralChineseSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralChineseResponse>;
    /**
     * Convert base 10 representation of a given number to egyptian numeral.
     */
    getNumbersNumeralEgyptian(req: operations.GetNumbersNumeralEgyptianRequest, security: operations.GetNumbersNumeralEgyptianSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralEgyptianResponse>;
    /**
     * Convert base 10 representation of a given number to roman numeral.
     */
    getNumbersNumeralRoman(req: operations.GetNumbersNumeralRomanRequest, security: operations.GetNumbersNumeralRomanSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralRomanResponse>;
}
