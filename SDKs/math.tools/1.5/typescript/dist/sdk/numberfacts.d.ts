import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get random interesting fact about a given number.
 */
export declare class NumberFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a random fact about a number
     */
    getNumbersFact(req: operations.GetNumbersFactRequest, security: operations.GetNumbersFactSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersFactResponse>;
}
