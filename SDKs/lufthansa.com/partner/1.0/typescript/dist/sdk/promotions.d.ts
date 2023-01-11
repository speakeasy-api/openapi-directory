import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Promotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * priceOffers - Price Offers
     *
     * Retrieve a best price offer given an origin and destination.
    **/
    priceOffers(req: operations.PriceOffersRequest, config?: AxiosRequestConfig): Promise<operations.PriceOffersResponse>;
}
