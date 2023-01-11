import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMarketdataExchangeComponents - Exchange Components
     *
     * This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response.
    **/
    getMarketdataExchangeComponents(config?: AxiosRequestConfig): Promise<operations.GetMarketdataExchangeComponentsResponse>;
}
