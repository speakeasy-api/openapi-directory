import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Advertisers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
     */
    displayvideoAdvertisersAssetsUpload(req: operations.DisplayvideoAdvertisersAssetsUploadRequest, security: operations.DisplayvideoAdvertisersAssetsUploadSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersAssetsUploadResponse>;
    /**
     * Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
     */
    displayvideoAdvertisersAudit(req: operations.DisplayvideoAdvertisersAuditRequest, security: operations.DisplayvideoAdvertisersAuditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersAuditResponse>;
    /**
     * Creates a new campaign. Returns the newly created campaign if successful.
     */
    displayvideoAdvertisersCampaignsCreate(req: operations.DisplayvideoAdvertisersCampaignsCreateRequest, security: operations.DisplayvideoAdvertisersCampaignsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsCreateResponse>;
    /**
     * Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
     */
    displayvideoAdvertisersCampaignsDelete(req: operations.DisplayvideoAdvertisersCampaignsDeleteRequest, security: operations.DisplayvideoAdvertisersCampaignsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsDeleteResponse>;
    /**
     * Gets a campaign.
     */
    displayvideoAdvertisersCampaignsGet(req: operations.DisplayvideoAdvertisersCampaignsGetRequest, security: operations.DisplayvideoAdvertisersCampaignsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsGetResponse>;
    /**
     * Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     */
    displayvideoAdvertisersCampaignsList(req: operations.DisplayvideoAdvertisersCampaignsListRequest, security: operations.DisplayvideoAdvertisersCampaignsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsListResponse>;
    /**
     * Lists assigned targeting options of a campaign across targeting types.
     */
    displayvideoAdvertisersCampaignsListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse>;
    /**
     * Updates an existing campaign. Returns the updated campaign if successful.
     */
    displayvideoAdvertisersCampaignsPatch(req: operations.DisplayvideoAdvertisersCampaignsPatchRequest, security: operations.DisplayvideoAdvertisersCampaignsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsPatchResponse>;
    /**
     * Gets a single targeting option assigned to a campaign.
     */
    displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to a campaign for a specified targeting type.
     */
    displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * Creates a new channel. Returns the newly created channel if successful.
     */
    displayvideoAdvertisersChannelsCreate(req: operations.DisplayvideoAdvertisersChannelsCreateRequest, security: operations.DisplayvideoAdvertisersChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsCreateResponse>;
    /**
     * Lists channels for a partner or advertiser.
     */
    displayvideoAdvertisersChannelsList(req: operations.DisplayvideoAdvertisersChannelsListRequest, security: operations.DisplayvideoAdvertisersChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsListResponse>;
    /**
     * Updates a channel. Returns the updated channel if successful.
     */
    displayvideoAdvertisersChannelsPatch(req: operations.DisplayvideoAdvertisersChannelsPatchRequest, security: operations.DisplayvideoAdvertisersChannelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsPatchResponse>;
    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     */
    displayvideoAdvertisersChannelsSitesBulkEdit(req: operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest, security: operations.DisplayvideoAdvertisersChannelsSitesBulkEditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse>;
    /**
     * Deletes a site from a channel.
     */
    displayvideoAdvertisersChannelsSitesDelete(req: operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest, security: operations.DisplayvideoAdvertisersChannelsSitesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse>;
    /**
     * Lists sites in a channel.
     */
    displayvideoAdvertisersChannelsSitesList(req: operations.DisplayvideoAdvertisersChannelsSitesListRequest, security: operations.DisplayvideoAdvertisersChannelsSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesListResponse>;
    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
     */
    displayvideoAdvertisersChannelsSitesReplace(req: operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest, security: operations.DisplayvideoAdvertisersChannelsSitesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse>;
    /**
     * Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
     */
    displayvideoAdvertisersCreate(req: operations.DisplayvideoAdvertisersCreateRequest, security: operations.DisplayvideoAdvertisersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreateResponse>;
    /**
     * Creates a new creative. Returns the newly created creative if successful.
     */
    displayvideoAdvertisersCreativesCreate(req: operations.DisplayvideoAdvertisersCreativesCreateRequest, security: operations.DisplayvideoAdvertisersCreativesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesCreateResponse>;
    /**
     * Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
     */
    displayvideoAdvertisersCreativesDelete(req: operations.DisplayvideoAdvertisersCreativesDeleteRequest, security: operations.DisplayvideoAdvertisersCreativesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesDeleteResponse>;
    /**
     * Gets a creative.
     */
    displayvideoAdvertisersCreativesGet(req: operations.DisplayvideoAdvertisersCreativesGetRequest, security: operations.DisplayvideoAdvertisersCreativesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesGetResponse>;
    /**
     * Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     */
    displayvideoAdvertisersCreativesList(req: operations.DisplayvideoAdvertisersCreativesListRequest, security: operations.DisplayvideoAdvertisersCreativesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesListResponse>;
    /**
     * Updates an existing creative. Returns the updated creative if successful.
     */
    displayvideoAdvertisersCreativesPatch(req: operations.DisplayvideoAdvertisersCreativesPatchRequest, security: operations.DisplayvideoAdvertisersCreativesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesPatchResponse>;
    /**
     * Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
     */
    displayvideoAdvertisersDelete(req: operations.DisplayvideoAdvertisersDeleteRequest, security: operations.DisplayvideoAdvertisersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersDeleteResponse>;
    /**
     * Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
     */
    displayvideoAdvertisersEditAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse>;
    /**
     * Gets an advertiser.
     */
    displayvideoAdvertisersGet(req: operations.DisplayvideoAdvertisersGetRequest, security: operations.DisplayvideoAdvertisersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersGetResponse>;
    /**
     * Creates a new insertion order. Returns the newly created insertion order if successful.
     */
    displayvideoAdvertisersInsertionOrdersCreate(req: operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse>;
    /**
     * Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
     */
    displayvideoAdvertisersInsertionOrdersDelete(req: operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse>;
    /**
     * Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
     */
    displayvideoAdvertisersInsertionOrdersGet(req: operations.DisplayvideoAdvertisersInsertionOrdersGetRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersGetResponse>;
    /**
     * Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     */
    displayvideoAdvertisersInsertionOrdersList(req: operations.DisplayvideoAdvertisersInsertionOrdersListRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersListResponse>;
    /**
     * Lists assigned targeting options of an insertion order across targeting types.
     */
    displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse>;
    /**
     * Updates an existing insertion order. Returns the updated insertion order if successful.
     */
    displayvideoAdvertisersInsertionOrdersPatch(req: operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse>;
    /**
     * Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     */
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     */
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * Gets a single targeting option assigned to an insertion order.
     */
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to an insertion order.
     */
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
     */
    displayvideoAdvertisersInvoicesList(req: operations.DisplayvideoAdvertisersInvoicesListRequest, security: operations.DisplayvideoAdvertisersInvoicesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInvoicesListResponse>;
    /**
     * Retrieves the invoice currency used by an advertiser in a given month.
     */
    displayvideoAdvertisersInvoicesLookupInvoiceCurrency(req: operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest, security: operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse>;
    /**
     * Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
     */
    displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse>;
    /**
     * Lists assigned targeting options for multiple line items across targeting types.
     */
    displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse>;
    /**
     * Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
     */
    displayvideoAdvertisersLineItemsBulkUpdate(req: operations.DisplayvideoAdvertisersLineItemsBulkUpdateRequest, security: operations.DisplayvideoAdvertisersLineItemsBulkUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkUpdateResponse>;
    /**
     * Creates a new line item. Returns the newly created line item if successful.
     */
    displayvideoAdvertisersLineItemsCreate(req: operations.DisplayvideoAdvertisersLineItemsCreateRequest, security: operations.DisplayvideoAdvertisersLineItemsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsCreateResponse>;
    /**
     * Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
     */
    displayvideoAdvertisersLineItemsDelete(req: operations.DisplayvideoAdvertisersLineItemsDeleteRequest, security: operations.DisplayvideoAdvertisersLineItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsDeleteResponse>;
    /**
     * Duplicates a line item. Returns the ID of the created line item if successful.
     */
    displayvideoAdvertisersLineItemsDuplicate(req: operations.DisplayvideoAdvertisersLineItemsDuplicateRequest, security: operations.DisplayvideoAdvertisersLineItemsDuplicateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsDuplicateResponse>;
    /**
     * Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
     */
    displayvideoAdvertisersLineItemsGenerateDefault(req: operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest, security: operations.DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse>;
    /**
     * Gets a line item.
     */
    displayvideoAdvertisersLineItemsGet(req: operations.DisplayvideoAdvertisersLineItemsGetRequest, security: operations.DisplayvideoAdvertisersLineItemsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsGetResponse>;
    /**
     * Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     */
    displayvideoAdvertisersLineItemsList(req: operations.DisplayvideoAdvertisersLineItemsListRequest, security: operations.DisplayvideoAdvertisersLineItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsListResponse>;
    /**
     * Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
     */
    displayvideoAdvertisersLineItemsPatch(req: operations.DisplayvideoAdvertisersLineItemsPatchRequest, security: operations.DisplayvideoAdvertisersLineItemsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsPatchResponse>;
    /**
     * Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
     */
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest, security: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
     */
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest, security: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * Gets a single targeting option assigned to a line item.
     */
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to a line item.
     */
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
     */
    displayvideoAdvertisersList(req: operations.DisplayvideoAdvertisersListRequest, security: operations.DisplayvideoAdvertisersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersListResponse>;
    /**
     * Lists assigned targeting options of an advertiser across targeting types.
     */
    displayvideoAdvertisersListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersListAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersListAssignedTargetingOptionsResponse>;
    /**
     * Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
     */
    displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest, security: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse>;
    /**
     * Creates an assignment between a location and a location list.
     */
    displayvideoAdvertisersLocationListsAssignedLocationsCreate(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest, security: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse>;
    /**
     * Deletes the assignment between a location and a location list.
     */
    displayvideoAdvertisersLocationListsAssignedLocationsDelete(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest, security: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse>;
    /**
     * Lists locations assigned to a location list.
     */
    displayvideoAdvertisersLocationListsAssignedLocationsList(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest, security: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse>;
    /**
     * Creates a new location list. Returns the newly created location list if successful.
     */
    displayvideoAdvertisersLocationListsCreate(req: operations.DisplayvideoAdvertisersLocationListsCreateRequest, security: operations.DisplayvideoAdvertisersLocationListsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsCreateResponse>;
    /**
     * Lists location lists based on a given advertiser id.
     */
    displayvideoAdvertisersLocationListsList(req: operations.DisplayvideoAdvertisersLocationListsListRequest, security: operations.DisplayvideoAdvertisersLocationListsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsListResponse>;
    /**
     * Updates a location list. Returns the updated location list if successful.
     */
    displayvideoAdvertisersLocationListsPatch(req: operations.DisplayvideoAdvertisersLocationListsPatchRequest, security: operations.DisplayvideoAdvertisersLocationListsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsPatchResponse>;
    /**
     * Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
     */
    displayvideoAdvertisersManualTriggersActivate(req: operations.DisplayvideoAdvertisersManualTriggersActivateRequest, security: operations.DisplayvideoAdvertisersManualTriggersActivateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersActivateResponse>;
    /**
     * Creates a new manual trigger. Returns the newly created manual trigger if successful.
     */
    displayvideoAdvertisersManualTriggersCreate(req: operations.DisplayvideoAdvertisersManualTriggersCreateRequest, security: operations.DisplayvideoAdvertisersManualTriggersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersCreateResponse>;
    /**
     * Deactivates a manual trigger.
     */
    displayvideoAdvertisersManualTriggersDeactivate(req: operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest, security: operations.DisplayvideoAdvertisersManualTriggersDeactivateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse>;
    /**
     * Gets a manual trigger.
     */
    displayvideoAdvertisersManualTriggersGet(req: operations.DisplayvideoAdvertisersManualTriggersGetRequest, security: operations.DisplayvideoAdvertisersManualTriggersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersGetResponse>;
    /**
     * Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
     */
    displayvideoAdvertisersManualTriggersList(req: operations.DisplayvideoAdvertisersManualTriggersListRequest, security: operations.DisplayvideoAdvertisersManualTriggersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersListResponse>;
    /**
     * Updates a manual trigger. Returns the updated manual trigger if successful.
     */
    displayvideoAdvertisersManualTriggersPatch(req: operations.DisplayvideoAdvertisersManualTriggersPatchRequest, security: operations.DisplayvideoAdvertisersManualTriggersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersPatchResponse>;
    /**
     * Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
     */
    displayvideoAdvertisersNegativeKeywordListsCreate(req: operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse>;
    /**
     * Lists negative keyword lists based on a given advertiser id.
     */
    displayvideoAdvertisersNegativeKeywordListsList(req: operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse>;
    /**
     * Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
     */
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse>;
    /**
     * Deletes a negative keyword from a negative keyword list.
     */
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse>;
    /**
     * Lists negative keywords in a negative keyword list.
     */
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse>;
    /**
     * Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
     */
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse>;
    /**
     * Updates a negative keyword list. Returns the updated negative keyword list if successful.
     */
    displayvideoAdvertisersNegativeKeywordListsPatch(req: operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest, security: operations.DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse>;
    /**
     * Updates an existing advertiser. Returns the updated advertiser if successful.
     */
    displayvideoAdvertisersPatch(req: operations.DisplayvideoAdvertisersPatchRequest, security: operations.DisplayvideoAdvertisersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersPatchResponse>;
    /**
     * Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
     */
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest, security: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * Deletes an assigned targeting option from an advertiser.
     */
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest, security: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * Gets a single targeting option assigned to an advertiser.
     */
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to an advertiser.
     */
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * Gets a YouTube ad group ad.
     */
    displayvideoAdvertisersYoutubeAdGroupAdsGet(req: operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetResponse>;
    /**
     * Lists YouTube ad group ads.
     */
    displayvideoAdvertisersYoutubeAdGroupAdsList(req: operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListResponse>;
    /**
     * Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.
     */
    displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsResponse>;
    /**
     * Gets a YouTube ad group.
     */
    displayvideoAdvertisersYoutubeAdGroupsGet(req: operations.DisplayvideoAdvertisersYoutubeAdGroupsGetRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupsGetResponse>;
    /**
     * Lists YouTube ad groups.
     */
    displayvideoAdvertisersYoutubeAdGroupsList(req: operations.DisplayvideoAdvertisersYoutubeAdGroupsListRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupsListResponse>;
    /**
     * Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.
     */
    displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.
     */
    displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest, security: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListResponse>;
}
