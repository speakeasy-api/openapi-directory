import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add expiry listings into GoDaddy Auction
     */
    addExpiryListingsJson(req: shared.AftermarketListingExpiryCreate[], config?: AxiosRequestConfig): Promise<operations.AddExpiryListingsJsonResponse>;
    /**
     * Add expiry listings into GoDaddy Auction
     */
    addExpiryListingsRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AddExpiryListingsRawResponse>;
    /**
     * Remove listings from GoDaddy Auction
     */
    deleteListings(req: operations.DeleteListingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListingsResponse>;
}
