import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Promotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Price Offers
     *
     * @remarks
     * Retrieve a best price offer given an origin and destination.
     */
    priceOffers(req: operations.PriceOffersRequest, security: operations.PriceOffersSecurity, config?: AxiosRequestConfig): Promise<operations.PriceOffersResponse>;
}
