import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TokenPrices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists price and available volume for a certain token
     */
    getTokenPrice(req: operations.GetTokenPriceRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenPriceResponse>;
    /**
     * Lists all token prices and available volume
     */
    getTokenPrices(config?: AxiosRequestConfig): Promise<operations.GetTokenPricesResponse>;
}
