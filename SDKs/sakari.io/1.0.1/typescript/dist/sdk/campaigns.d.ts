import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Define reusable message campaigns with a predefined contact list/filter, template and schedule
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
     * Create campaign
     */
    campaignsCreate(req: operations.CampaignsCreateRequest, security: operations.CampaignsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CampaignsCreateResponse>;
    /**
     * Fetch campaign by ID
     */
    campaignsFetch(req: operations.CampaignsFetchRequest, security: operations.CampaignsFetchSecurity, config?: AxiosRequestConfig): Promise<operations.CampaignsFetchResponse>;
    /**
     * Fetch campaigns
     */
    campaignsFetchAll(req: operations.CampaignsFetchAllRequest, security: operations.CampaignsFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.CampaignsFetchAllResponse>;
    /**
     * Deletes a campaign
     */
    campaignsRemove(req: operations.CampaignsRemoveRequest, security: operations.CampaignsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.CampaignsRemoveResponse>;
    /**
     * Updates a campaign
     */
    campaignsUpdate(req: operations.CampaignsUpdateRequest, security: operations.CampaignsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CampaignsUpdateResponse>;
}
