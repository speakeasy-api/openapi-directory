import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nytimes.com/svc/books/v3"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Books API provides information about book reviews and The New York Times bestsellers lists.
 *
 * @see {@link http://developer.nytimes.com/}
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Best Seller History List
     */
    getListsBestSellersHistoryJson(req: operations.GETListsBestSellersHistoryJsonRequest, security: operations.GETListsBestSellersHistoryJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETListsBestSellersHistoryJsonResponse>;
    /**
     * Best Seller List by Date
     */
    getListsDateListJson(req: operations.GETListsDateListJsonRequest, security: operations.GETListsDateListJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETListsDateListJsonResponse>;
    /**
     * Best Seller List
     */
    getListsFormat(req: operations.GETListsFormatRequest, security: operations.GETListsFormatSecurity, config?: AxiosRequestConfig): Promise<operations.GETListsFormatResponse>;
    /**
     * Best Seller List Names
     */
    getListsNamesFormat(req: operations.GETListsNamesFormatRequest, security: operations.GETListsNamesFormatSecurity, config?: AxiosRequestConfig): Promise<operations.GETListsNamesFormatResponse>;
    /**
     * Best Seller List Overview
     */
    getListsOverviewFormat(req: operations.GETListsOverviewFormatRequest, security: operations.GETListsOverviewFormatSecurity, config?: AxiosRequestConfig): Promise<operations.GETListsOverviewFormatResponse>;
    /**
     * Reviews
     */
    getReviewsFormat(req: operations.GETReviewsFormatRequest, security: operations.GETReviewsFormatSecurity, config?: AxiosRequestConfig): Promise<operations.GETReviewsFormatResponse>;
}
