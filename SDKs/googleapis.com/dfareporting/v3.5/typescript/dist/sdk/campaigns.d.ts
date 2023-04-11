import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one campaign by ID.
     */
    dfareportingCampaignsGet(req: operations.DfareportingCampaignsGetRequest, security: operations.DfareportingCampaignsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsGetResponse>;
    /**
     * Inserts a new campaign.
     */
    dfareportingCampaignsInsert(req: operations.DfareportingCampaignsInsertRequest, security: operations.DfareportingCampaignsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsInsertResponse>;
    /**
     * Retrieves a list of campaigns, possibly filtered. This method supports paging.
     */
    dfareportingCampaignsList(req: operations.DfareportingCampaignsListRequest, security: operations.DfareportingCampaignsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsListResponse>;
    /**
     * Updates an existing campaign. This method supports patch semantics.
     */
    dfareportingCampaignsPatch(req: operations.DfareportingCampaignsPatchRequest, security: operations.DfareportingCampaignsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsPatchResponse>;
    /**
     * Updates an existing campaign.
     */
    dfareportingCampaignsUpdate(req: operations.DfareportingCampaignsUpdateRequest, security: operations.DfareportingCampaignsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsUpdateResponse>;
}
