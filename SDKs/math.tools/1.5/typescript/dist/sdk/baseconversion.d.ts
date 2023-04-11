import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Convert from one base to another. This API is free (rate limited).
 */
export declare class BaseConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert a given number from one base to another base
     */
    getNumbersBase(req: operations.GetNumbersBaseRequest, security: operations.GetNumbersBaseSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseResponse>;
    /**
     * Convert a given number to binary
     */
    getNumbersBaseBinary(req: operations.GetNumbersBaseBinaryRequest, security: operations.GetNumbersBaseBinarySecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseBinaryResponse>;
    /**
     * Convert a given number to hexadecimal
     */
    getNumbersBaseHex(req: operations.GetNumbersBaseHexRequest, security: operations.GetNumbersBaseHexSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseHexResponse>;
    /**
     * Convert a given number to octal
     */
    getNumbersBaseOctal(req: operations.GetNumbersBaseOctalRequest, security: operations.GetNumbersBaseOctalSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseOctalResponse>;
}
