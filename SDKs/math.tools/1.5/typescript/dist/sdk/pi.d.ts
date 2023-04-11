import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Digits of PI and more.This API is free (rate limited).
 */
export declare class Pi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get digits of pi (Ï€)
     */
    getNumbersPi(req: operations.GetNumbersPiRequest, security: operations.GetNumbersPiSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPiResponse>;
}
