import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations with NearEarthObjects
 */
export declare class Feed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find Near Earth Objects for today
     *
     * @remarks
     * Get a list of Near Earth Objects for today
     */
    retrieveNEOFeedToday(req: operations.RetrieveNEOFeedTodayRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNEOFeedTodayResponse>;
    /**
     * Find Near Earth Objects by date
     *
     * @remarks
     * Get a list of Near Earth Objects within a date range, The max range in one query is 7 days
     */
    retrieveNearEarthObjectFeed(req: operations.RetrieveNearEarthObjectFeedRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNearEarthObjectFeedResponse>;
}
