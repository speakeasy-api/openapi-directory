import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints that allow you to search for Marketing Events in HubSpot.
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search for marketing events
     *
     * @remarks
     * Search for marketing events that have an event id that starts with the query string
     */
    getMarketingV3MarketingEventsEventsSearchDoSearch(req: operations.GetMarketingV3MarketingEventsEventsSearchDoSearchRequest, security: operations.GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetMarketingV3MarketingEventsEventsSearchDoSearchResponse>;
}
