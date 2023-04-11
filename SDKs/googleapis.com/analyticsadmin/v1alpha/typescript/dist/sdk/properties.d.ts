import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     */
    analyticsadminPropertiesAccessBindingsBatchCreate(req: operations.AnalyticsadminPropertiesAccessBindingsBatchCreateRequest, security: operations.AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsBatchCreateResponse>;
    /**
     * Deletes information about multiple users' links to an account or property.
     */
    analyticsadminPropertiesAccessBindingsBatchDelete(req: operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest, security: operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteResponse>;
    /**
     * Gets information about multiple access bindings to an account or property.
     */
    analyticsadminPropertiesAccessBindingsBatchGet(req: operations.AnalyticsadminPropertiesAccessBindingsBatchGetRequest, security: operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsBatchGetResponse>;
    /**
     * Updates information about multiple access bindings to an account or property.
     */
    analyticsadminPropertiesAccessBindingsBatchUpdate(req: operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest, security: operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateResponse>;
    /**
     * Creates an access binding on an account or property.
     */
    analyticsadminPropertiesAccessBindingsCreate(req: operations.AnalyticsadminPropertiesAccessBindingsCreateRequest, security: operations.AnalyticsadminPropertiesAccessBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsCreateResponse>;
    /**
     * Lists all access bindings on an account or property.
     */
    analyticsadminPropertiesAccessBindingsList(req: operations.AnalyticsadminPropertiesAccessBindingsListRequest, security: operations.AnalyticsadminPropertiesAccessBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAccessBindingsListResponse>;
    /**
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     */
    analyticsadminPropertiesAcknowledgeUserDataCollection(req: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, security: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse>;
    /**
     * Creates an Audience.
     */
    analyticsadminPropertiesAudiencesCreate(req: operations.AnalyticsadminPropertiesAudiencesCreateRequest, security: operations.AnalyticsadminPropertiesAudiencesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAudiencesCreateResponse>;
    /**
     * Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     */
    analyticsadminPropertiesAudiencesList(req: operations.AnalyticsadminPropertiesAudiencesListRequest, security: operations.AnalyticsadminPropertiesAudiencesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAudiencesListResponse>;
    /**
     * Lists BigQuery Links on a property.
     */
    analyticsadminPropertiesBigQueryLinksList(req: operations.AnalyticsadminPropertiesBigQueryLinksListRequest, security: operations.AnalyticsadminPropertiesBigQueryLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesBigQueryLinksListResponse>;
    /**
     * Creates a conversion event with the specified attributes.
     */
    analyticsadminPropertiesConversionEventsCreate(req: operations.AnalyticsadminPropertiesConversionEventsCreateRequest, security: operations.AnalyticsadminPropertiesConversionEventsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsCreateResponse>;
    /**
     * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     */
    analyticsadminPropertiesConversionEventsList(req: operations.AnalyticsadminPropertiesConversionEventsListRequest, security: operations.AnalyticsadminPropertiesConversionEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsListResponse>;
    /**
     * Creates an "GA4" property with the specified location and attributes.
     */
    analyticsadminPropertiesCreate(req: operations.AnalyticsadminPropertiesCreateRequest, security: operations.AnalyticsadminPropertiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCreateResponse>;
    /**
     * Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
     */
    analyticsadminPropertiesCreateConnectedSiteTag(req: operations.AnalyticsadminPropertiesCreateConnectedSiteTagRequest, security: operations.AnalyticsadminPropertiesCreateConnectedSiteTagSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCreateConnectedSiteTagResponse>;
    /**
     * Creates a CustomDimension.
     */
    analyticsadminPropertiesCustomDimensionsCreate(req: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest, security: operations.AnalyticsadminPropertiesCustomDimensionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse>;
    /**
     * Lists CustomDimensions on a property.
     */
    analyticsadminPropertiesCustomDimensionsList(req: operations.AnalyticsadminPropertiesCustomDimensionsListRequest, security: operations.AnalyticsadminPropertiesCustomDimensionsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsListResponse>;
    /**
     * Archives a CustomMetric on a property.
     */
    analyticsadminPropertiesCustomMetricsArchive(req: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest, security: operations.AnalyticsadminPropertiesCustomMetricsArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse>;
    /**
     * Creates a CustomMetric.
     */
    analyticsadminPropertiesCustomMetricsCreate(req: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest, security: operations.AnalyticsadminPropertiesCustomMetricsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsCreateResponse>;
    /**
     * Lists CustomMetrics on a property.
     */
    analyticsadminPropertiesCustomMetricsList(req: operations.AnalyticsadminPropertiesCustomMetricsListRequest, security: operations.AnalyticsadminPropertiesCustomMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsListResponse>;
    /**
     * Creates a DataStream.
     */
    analyticsadminPropertiesDataStreamsCreate(req: operations.AnalyticsadminPropertiesDataStreamsCreateRequest, security: operations.AnalyticsadminPropertiesDataStreamsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsCreateResponse>;
    /**
     * Lists DataStreams on a property.
     */
    analyticsadminPropertiesDataStreamsList(req: operations.AnalyticsadminPropertiesDataStreamsListRequest, security: operations.AnalyticsadminPropertiesDataStreamsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsListResponse>;
    /**
     * Creates a measurement protocol secret.
     */
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, security: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse>;
    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     */
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, security: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse>;
    /**
     * Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
     */
    analyticsadminPropertiesDeleteConnectedSiteTag(req: operations.AnalyticsadminPropertiesDeleteConnectedSiteTagRequest, security: operations.AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDeleteConnectedSiteTagResponse>;
    /**
     * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse>;
    /**
     * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse>;
    /**
     * Creates a DisplayVideo360AdvertiserLinkProposal.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse>;
    /**
     * Lists DisplayVideo360AdvertiserLinkProposals on a property.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse>;
    /**
     * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse>;
    /**
     * Lists all DisplayVideo360AdvertiserLinks on a property.
     */
    analyticsadminPropertiesDisplayVideo360AdvertiserLinksList(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest, security: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse>;
    /**
     * Creates a ExpandedDataSet.
     */
    analyticsadminPropertiesExpandedDataSetsCreate(req: operations.AnalyticsadminPropertiesExpandedDataSetsCreateRequest, security: operations.AnalyticsadminPropertiesExpandedDataSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesExpandedDataSetsCreateResponse>;
    /**
     * Lists ExpandedDataSets on a property.
     */
    analyticsadminPropertiesExpandedDataSetsList(req: operations.AnalyticsadminPropertiesExpandedDataSetsListRequest, security: operations.AnalyticsadminPropertiesExpandedDataSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesExpandedDataSetsListResponse>;
    /**
     * Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
     */
    analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut(req: operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest, security: operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutResponse>;
    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     */
    analyticsadminPropertiesFirebaseLinksCreate(req: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest, security: operations.AnalyticsadminPropertiesFirebaseLinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse>;
    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     */
    analyticsadminPropertiesFirebaseLinksList(req: operations.AnalyticsadminPropertiesFirebaseLinksListRequest, security: operations.AnalyticsadminPropertiesFirebaseLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksListResponse>;
    /**
     * Creates a GoogleAdsLink.
     */
    analyticsadminPropertiesGoogleAdsLinksCreate(req: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest, security: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse>;
    /**
     * Lists GoogleAdsLinks on a property.
     */
    analyticsadminPropertiesGoogleAdsLinksList(req: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest, security: operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse>;
    /**
     * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     */
    analyticsadminPropertiesList(req: operations.AnalyticsadminPropertiesListRequest, security: operations.AnalyticsadminPropertiesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesListResponse>;
    /**
     * Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
     */
    analyticsadminPropertiesListConnectedSiteTags(req: operations.AnalyticsadminPropertiesListConnectedSiteTagsRequest, security: operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesListConnectedSiteTagsResponse>;
    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
     */
    analyticsadminPropertiesRunAccessReport(req: operations.AnalyticsadminPropertiesRunAccessReportRequest, security: operations.AnalyticsadminPropertiesRunAccessReportSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesRunAccessReportResponse>;
    /**
     * Creates a SearchAds360Link.
     */
    analyticsadminPropertiesSearchAds360LinksCreate(req: operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest, security: operations.AnalyticsadminPropertiesSearchAds360LinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse>;
    /**
     * Lists all SearchAds360Links on a property.
     */
    analyticsadminPropertiesSearchAds360LinksList(req: operations.AnalyticsadminPropertiesSearchAds360LinksListRequest, security: operations.AnalyticsadminPropertiesSearchAds360LinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesSearchAds360LinksListResponse>;
    /**
     * Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
     */
    analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut(req: operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest, security: operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutResponse>;
    /**
     * Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     */
    analyticsadminPropertiesUserLinksAudit(req: operations.AnalyticsadminPropertiesUserLinksAuditRequest, security: operations.AnalyticsadminPropertiesUserLinksAuditSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksAuditResponse>;
    /**
     * Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     */
    analyticsadminPropertiesUserLinksBatchCreate(req: operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest, security: operations.AnalyticsadminPropertiesUserLinksBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse>;
    /**
     * Deletes information about multiple users' links to an account or property.
     */
    analyticsadminPropertiesUserLinksBatchDelete(req: operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest, security: operations.AnalyticsadminPropertiesUserLinksBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse>;
    /**
     * Gets information about multiple users' links to an account or property.
     */
    analyticsadminPropertiesUserLinksBatchGet(req: operations.AnalyticsadminPropertiesUserLinksBatchGetRequest, security: operations.AnalyticsadminPropertiesUserLinksBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchGetResponse>;
    /**
     * Updates information about multiple users' links to an account or property.
     */
    analyticsadminPropertiesUserLinksBatchUpdate(req: operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest, security: operations.AnalyticsadminPropertiesUserLinksBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse>;
    /**
     * Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     */
    analyticsadminPropertiesUserLinksCreate(req: operations.AnalyticsadminPropertiesUserLinksCreateRequest, security: operations.AnalyticsadminPropertiesUserLinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksCreateResponse>;
    /**
     * Deletes a user link on an account or property.
     */
    analyticsadminPropertiesUserLinksDelete(req: operations.AnalyticsadminPropertiesUserLinksDeleteRequest, security: operations.AnalyticsadminPropertiesUserLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksDeleteResponse>;
    /**
     * Gets information about a user's link to an account or property.
     */
    analyticsadminPropertiesUserLinksGet(req: operations.AnalyticsadminPropertiesUserLinksGetRequest, security: operations.AnalyticsadminPropertiesUserLinksGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksGetResponse>;
    /**
     * Lists all user links on an account or property.
     */
    analyticsadminPropertiesUserLinksList(req: operations.AnalyticsadminPropertiesUserLinksListRequest, security: operations.AnalyticsadminPropertiesUserLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksListResponse>;
    /**
     * Updates a user link on an account or property.
     */
    analyticsadminPropertiesUserLinksPatch(req: operations.AnalyticsadminPropertiesUserLinksPatchRequest, security: operations.AnalyticsadminPropertiesUserLinksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksPatchResponse>;
}
