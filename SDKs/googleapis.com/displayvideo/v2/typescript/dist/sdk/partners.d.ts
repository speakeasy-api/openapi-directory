import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new channel. Returns the newly created channel if successful.
     */
    displayvideoPartnersChannelsCreate(req: operations.DisplayvideoPartnersChannelsCreateRequest, security: operations.DisplayvideoPartnersChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsCreateResponse>;
    /**
     * Lists channels for a partner or advertiser.
     */
    displayvideoPartnersChannelsList(req: operations.DisplayvideoPartnersChannelsListRequest, security: operations.DisplayvideoPartnersChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsListResponse>;
    /**
     * Updates a channel. Returns the updated channel if successful.
     */
    displayvideoPartnersChannelsPatch(req: operations.DisplayvideoPartnersChannelsPatchRequest, security: operations.DisplayvideoPartnersChannelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsPatchResponse>;
    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     */
    displayvideoPartnersChannelsSitesBulkEdit(req: operations.DisplayvideoPartnersChannelsSitesBulkEditRequest, security: operations.DisplayvideoPartnersChannelsSitesBulkEditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesBulkEditResponse>;
    /**
     * Deletes a site from a channel.
     */
    displayvideoPartnersChannelsSitesDelete(req: operations.DisplayvideoPartnersChannelsSitesDeleteRequest, security: operations.DisplayvideoPartnersChannelsSitesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesDeleteResponse>;
    /**
     * Lists sites in a channel.
     */
    displayvideoPartnersChannelsSitesList(req: operations.DisplayvideoPartnersChannelsSitesListRequest, security: operations.DisplayvideoPartnersChannelsSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesListResponse>;
    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
     */
    displayvideoPartnersChannelsSitesReplace(req: operations.DisplayvideoPartnersChannelsSitesReplaceRequest, security: operations.DisplayvideoPartnersChannelsSitesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesReplaceResponse>;
    /**
     * Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
     */
    displayvideoPartnersEditAssignedTargetingOptions(req: operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest, security: operations.DisplayvideoPartnersEditAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersEditAssignedTargetingOptionsResponse>;
    /**
     * Gets a partner.
     */
    displayvideoPartnersGet(req: operations.DisplayvideoPartnersGetRequest, security: operations.DisplayvideoPartnersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersGetResponse>;
    /**
     * Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
     */
    displayvideoPartnersList(req: operations.DisplayvideoPartnersListRequest, security: operations.DisplayvideoPartnersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersListResponse>;
    /**
     * Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
     */
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest, security: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * Deletes an assigned targeting option from a partner.
     */
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest, security: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * Gets a single targeting option assigned to a partner.
     */
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to a partner.
     */
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse>;
}
