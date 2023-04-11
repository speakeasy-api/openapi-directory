import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Generate Random and interesting numbers.
 */
export declare class NumberGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate random number(s)
     */
    getNumbersRandom(req: operations.GetNumbersRandomRequest, security: operations.GetNumbersRandomSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersRandomResponse>;
}
