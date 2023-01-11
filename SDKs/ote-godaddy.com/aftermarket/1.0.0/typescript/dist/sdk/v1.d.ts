import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addExpiryListings - Add expiry listings into GoDaddy Auction
    **/
    addExpiryListings(req: operations.AddExpiryListingsRequest, config?: AxiosRequestConfig): Promise<operations.AddExpiryListingsResponse>;
    /**
     * deleteListings - Remove listings from GoDaddy Auction
    **/
    deleteListings(req: operations.DeleteListingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListingsResponse>;
}
