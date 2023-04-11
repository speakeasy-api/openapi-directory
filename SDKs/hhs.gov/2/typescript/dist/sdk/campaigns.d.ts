import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about campaigns
 */
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Campaigns
     *
     * @remarks
     * Media Listings for a specific campaign
     */
    getResourcesCampaignsJson(req: operations.GetResourcesCampaignsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsJsonResponse>;
    /**
     * Get Campaign by ID
     *
     * @remarks
     * Information about a specific campaign
     */
    getResourcesCampaignsIdJson(req: operations.GetResourcesCampaignsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdJsonResponse>;
    /**
     * Get MediaItems by Campaign ID
     *
     * @remarks
     * Campaign Listings
     */
    getResourcesCampaignsIdMediaJson(req: operations.GetResourcesCampaignsIdMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdMediaJsonResponse>;
    /**
     * Get MediaItems for Campaign
     *
     * @remarks
     * MediaItem
     */
    getResourcesCampaignsIdSyndicateFormat(req: operations.GetResourcesCampaignsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdSyndicateFormatResponse>;
}
