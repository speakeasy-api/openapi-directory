import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Management {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
     */
    analyticsManagementAccountSummariesList(req: operations.AnalyticsManagementAccountSummariesListRequest, security: operations.AnalyticsManagementAccountSummariesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountSummariesListResponse>;
    /**
     * Removes a user from the given account.
     */
    analyticsManagementAccountUserLinksDelete(req: operations.AnalyticsManagementAccountUserLinksDeleteRequest, security: operations.AnalyticsManagementAccountUserLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksDeleteResponse>;
    /**
     * Adds a new user to the given account.
     */
    analyticsManagementAccountUserLinksInsert(req: operations.AnalyticsManagementAccountUserLinksInsertRequest, security: operations.AnalyticsManagementAccountUserLinksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksInsertResponse>;
    /**
     * Lists account-user links for a given account.
     */
    analyticsManagementAccountUserLinksList(req: operations.AnalyticsManagementAccountUserLinksListRequest, security: operations.AnalyticsManagementAccountUserLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksListResponse>;
    /**
     * Updates permissions for an existing user on the given account.
     */
    analyticsManagementAccountUserLinksUpdate(req: operations.AnalyticsManagementAccountUserLinksUpdateRequest, security: operations.AnalyticsManagementAccountUserLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksUpdateResponse>;
    /**
     * Lists all accounts to which the user has access.
     */
    analyticsManagementAccountsList(req: operations.AnalyticsManagementAccountsListRequest, security: operations.AnalyticsManagementAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountsListResponse>;
    /**
     * Hashes the given Client ID.
     */
    analyticsManagementClientIdHashClientId(req: operations.AnalyticsManagementClientIdHashClientIdRequest, security: operations.AnalyticsManagementClientIdHashClientIdSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementClientIdHashClientIdResponse>;
    /**
     * List custom data sources to which the user has access.
     */
    analyticsManagementCustomDataSourcesList(req: operations.AnalyticsManagementCustomDataSourcesListRequest, security: operations.AnalyticsManagementCustomDataSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDataSourcesListResponse>;
    /**
     * Get a custom dimension to which the user has access.
     */
    analyticsManagementCustomDimensionsGet(req: operations.AnalyticsManagementCustomDimensionsGetRequest, security: operations.AnalyticsManagementCustomDimensionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsGetResponse>;
    /**
     * Create a new custom dimension.
     */
    analyticsManagementCustomDimensionsInsert(req: operations.AnalyticsManagementCustomDimensionsInsertRequest, security: operations.AnalyticsManagementCustomDimensionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsInsertResponse>;
    /**
     * Lists custom dimensions to which the user has access.
     */
    analyticsManagementCustomDimensionsList(req: operations.AnalyticsManagementCustomDimensionsListRequest, security: operations.AnalyticsManagementCustomDimensionsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsListResponse>;
    /**
     * Updates an existing custom dimension. This method supports patch semantics.
     */
    analyticsManagementCustomDimensionsPatch(req: operations.AnalyticsManagementCustomDimensionsPatchRequest, security: operations.AnalyticsManagementCustomDimensionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsPatchResponse>;
    /**
     * Updates an existing custom dimension.
     */
    analyticsManagementCustomDimensionsUpdate(req: operations.AnalyticsManagementCustomDimensionsUpdateRequest, security: operations.AnalyticsManagementCustomDimensionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsUpdateResponse>;
    /**
     * Get a custom metric to which the user has access.
     */
    analyticsManagementCustomMetricsGet(req: operations.AnalyticsManagementCustomMetricsGetRequest, security: operations.AnalyticsManagementCustomMetricsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsGetResponse>;
    /**
     * Create a new custom metric.
     */
    analyticsManagementCustomMetricsInsert(req: operations.AnalyticsManagementCustomMetricsInsertRequest, security: operations.AnalyticsManagementCustomMetricsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsInsertResponse>;
    /**
     * Lists custom metrics to which the user has access.
     */
    analyticsManagementCustomMetricsList(req: operations.AnalyticsManagementCustomMetricsListRequest, security: operations.AnalyticsManagementCustomMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsListResponse>;
    /**
     * Updates an existing custom metric. This method supports patch semantics.
     */
    analyticsManagementCustomMetricsPatch(req: operations.AnalyticsManagementCustomMetricsPatchRequest, security: operations.AnalyticsManagementCustomMetricsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsPatchResponse>;
    /**
     * Updates an existing custom metric.
     */
    analyticsManagementCustomMetricsUpdate(req: operations.AnalyticsManagementCustomMetricsUpdateRequest, security: operations.AnalyticsManagementCustomMetricsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsUpdateResponse>;
    /**
     * Delete an experiment.
     */
    analyticsManagementExperimentsDelete(req: operations.AnalyticsManagementExperimentsDeleteRequest, security: operations.AnalyticsManagementExperimentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsDeleteResponse>;
    /**
     * Returns an experiment to which the user has access.
     */
    analyticsManagementExperimentsGet(req: operations.AnalyticsManagementExperimentsGetRequest, security: operations.AnalyticsManagementExperimentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsGetResponse>;
    /**
     * Create a new experiment.
     */
    analyticsManagementExperimentsInsert(req: operations.AnalyticsManagementExperimentsInsertRequest, security: operations.AnalyticsManagementExperimentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsInsertResponse>;
    /**
     * Lists experiments to which the user has access.
     */
    analyticsManagementExperimentsList(req: operations.AnalyticsManagementExperimentsListRequest, security: operations.AnalyticsManagementExperimentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsListResponse>;
    /**
     * Update an existing experiment. This method supports patch semantics.
     */
    analyticsManagementExperimentsPatch(req: operations.AnalyticsManagementExperimentsPatchRequest, security: operations.AnalyticsManagementExperimentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsPatchResponse>;
    /**
     * Update an existing experiment.
     */
    analyticsManagementExperimentsUpdate(req: operations.AnalyticsManagementExperimentsUpdateRequest, security: operations.AnalyticsManagementExperimentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsUpdateResponse>;
    /**
     * Delete a filter.
     */
    analyticsManagementFiltersDelete(req: operations.AnalyticsManagementFiltersDeleteRequest, security: operations.AnalyticsManagementFiltersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersDeleteResponse>;
    /**
     * Returns filters to which the user has access.
     */
    analyticsManagementFiltersGet(req: operations.AnalyticsManagementFiltersGetRequest, security: operations.AnalyticsManagementFiltersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersGetResponse>;
    /**
     * Create a new filter.
     */
    analyticsManagementFiltersInsert(req: operations.AnalyticsManagementFiltersInsertRequest, security: operations.AnalyticsManagementFiltersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersInsertResponse>;
    /**
     * Lists all filters for an account
     */
    analyticsManagementFiltersList(req: operations.AnalyticsManagementFiltersListRequest, security: operations.AnalyticsManagementFiltersListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersListResponse>;
    /**
     * Updates an existing filter. This method supports patch semantics.
     */
    analyticsManagementFiltersPatch(req: operations.AnalyticsManagementFiltersPatchRequest, security: operations.AnalyticsManagementFiltersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersPatchResponse>;
    /**
     * Updates an existing filter.
     */
    analyticsManagementFiltersUpdate(req: operations.AnalyticsManagementFiltersUpdateRequest, security: operations.AnalyticsManagementFiltersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersUpdateResponse>;
    /**
     * Gets a goal to which the user has access.
     */
    analyticsManagementGoalsGet(req: operations.AnalyticsManagementGoalsGetRequest, security: operations.AnalyticsManagementGoalsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsGetResponse>;
    /**
     * Create a new goal.
     */
    analyticsManagementGoalsInsert(req: operations.AnalyticsManagementGoalsInsertRequest, security: operations.AnalyticsManagementGoalsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsInsertResponse>;
    /**
     * Lists goals to which the user has access.
     */
    analyticsManagementGoalsList(req: operations.AnalyticsManagementGoalsListRequest, security: operations.AnalyticsManagementGoalsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsListResponse>;
    /**
     * Updates an existing goal. This method supports patch semantics.
     */
    analyticsManagementGoalsPatch(req: operations.AnalyticsManagementGoalsPatchRequest, security: operations.AnalyticsManagementGoalsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsPatchResponse>;
    /**
     * Updates an existing goal.
     */
    analyticsManagementGoalsUpdate(req: operations.AnalyticsManagementGoalsUpdateRequest, security: operations.AnalyticsManagementGoalsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsUpdateResponse>;
    /**
     * Delete a profile filter link.
     */
    analyticsManagementProfileFilterLinksDelete(req: operations.AnalyticsManagementProfileFilterLinksDeleteRequest, security: operations.AnalyticsManagementProfileFilterLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksDeleteResponse>;
    /**
     * Returns a single profile filter link.
     */
    analyticsManagementProfileFilterLinksGet(req: operations.AnalyticsManagementProfileFilterLinksGetRequest, security: operations.AnalyticsManagementProfileFilterLinksGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksGetResponse>;
    /**
     * Create a new profile filter link.
     */
    analyticsManagementProfileFilterLinksInsert(req: operations.AnalyticsManagementProfileFilterLinksInsertRequest, security: operations.AnalyticsManagementProfileFilterLinksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksInsertResponse>;
    /**
     * Lists all profile filter links for a profile.
     */
    analyticsManagementProfileFilterLinksList(req: operations.AnalyticsManagementProfileFilterLinksListRequest, security: operations.AnalyticsManagementProfileFilterLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksListResponse>;
    /**
     * Update an existing profile filter link. This method supports patch semantics.
     */
    analyticsManagementProfileFilterLinksPatch(req: operations.AnalyticsManagementProfileFilterLinksPatchRequest, security: operations.AnalyticsManagementProfileFilterLinksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksPatchResponse>;
    /**
     * Update an existing profile filter link.
     */
    analyticsManagementProfileFilterLinksUpdate(req: operations.AnalyticsManagementProfileFilterLinksUpdateRequest, security: operations.AnalyticsManagementProfileFilterLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksUpdateResponse>;
    /**
     * Removes a user from the given view (profile).
     */
    analyticsManagementProfileUserLinksDelete(req: operations.AnalyticsManagementProfileUserLinksDeleteRequest, security: operations.AnalyticsManagementProfileUserLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksDeleteResponse>;
    /**
     * Adds a new user to the given view (profile).
     */
    analyticsManagementProfileUserLinksInsert(req: operations.AnalyticsManagementProfileUserLinksInsertRequest, security: operations.AnalyticsManagementProfileUserLinksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksInsertResponse>;
    /**
     * Lists profile-user links for a given view (profile).
     */
    analyticsManagementProfileUserLinksList(req: operations.AnalyticsManagementProfileUserLinksListRequest, security: operations.AnalyticsManagementProfileUserLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksListResponse>;
    /**
     * Updates permissions for an existing user on the given view (profile).
     */
    analyticsManagementProfileUserLinksUpdate(req: operations.AnalyticsManagementProfileUserLinksUpdateRequest, security: operations.AnalyticsManagementProfileUserLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksUpdateResponse>;
    /**
     * Deletes a view (profile).
     */
    analyticsManagementProfilesDelete(req: operations.AnalyticsManagementProfilesDeleteRequest, security: operations.AnalyticsManagementProfilesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesDeleteResponse>;
    /**
     * Gets a view (profile) to which the user has access.
     */
    analyticsManagementProfilesGet(req: operations.AnalyticsManagementProfilesGetRequest, security: operations.AnalyticsManagementProfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesGetResponse>;
    /**
     * Create a new view (profile).
     */
    analyticsManagementProfilesInsert(req: operations.AnalyticsManagementProfilesInsertRequest, security: operations.AnalyticsManagementProfilesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesInsertResponse>;
    /**
     * Lists views (profiles) to which the user has access.
     */
    analyticsManagementProfilesList(req: operations.AnalyticsManagementProfilesListRequest, security: operations.AnalyticsManagementProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesListResponse>;
    /**
     * Updates an existing view (profile). This method supports patch semantics.
     */
    analyticsManagementProfilesPatch(req: operations.AnalyticsManagementProfilesPatchRequest, security: operations.AnalyticsManagementProfilesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesPatchResponse>;
    /**
     * Updates an existing view (profile).
     */
    analyticsManagementProfilesUpdate(req: operations.AnalyticsManagementProfilesUpdateRequest, security: operations.AnalyticsManagementProfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesUpdateResponse>;
    /**
     * Delete a remarketing audience.
     */
    analyticsManagementRemarketingAudienceDelete(req: operations.AnalyticsManagementRemarketingAudienceDeleteRequest, security: operations.AnalyticsManagementRemarketingAudienceDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceDeleteResponse>;
    /**
     * Gets a remarketing audience to which the user has access.
     */
    analyticsManagementRemarketingAudienceGet(req: operations.AnalyticsManagementRemarketingAudienceGetRequest, security: operations.AnalyticsManagementRemarketingAudienceGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceGetResponse>;
    /**
     * Creates a new remarketing audience.
     */
    analyticsManagementRemarketingAudienceInsert(req: operations.AnalyticsManagementRemarketingAudienceInsertRequest, security: operations.AnalyticsManagementRemarketingAudienceInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceInsertResponse>;
    /**
     * Lists remarketing audiences to which the user has access.
     */
    analyticsManagementRemarketingAudienceList(req: operations.AnalyticsManagementRemarketingAudienceListRequest, security: operations.AnalyticsManagementRemarketingAudienceListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceListResponse>;
    /**
     * Updates an existing remarketing audience. This method supports patch semantics.
     */
    analyticsManagementRemarketingAudiencePatch(req: operations.AnalyticsManagementRemarketingAudiencePatchRequest, security: operations.AnalyticsManagementRemarketingAudiencePatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudiencePatchResponse>;
    /**
     * Updates an existing remarketing audience.
     */
    analyticsManagementRemarketingAudienceUpdate(req: operations.AnalyticsManagementRemarketingAudienceUpdateRequest, security: operations.AnalyticsManagementRemarketingAudienceUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceUpdateResponse>;
    /**
     * Lists segments to which the user has access.
     */
    analyticsManagementSegmentsList(req: operations.AnalyticsManagementSegmentsListRequest, security: operations.AnalyticsManagementSegmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementSegmentsListResponse>;
    /**
     * Deletes an unsampled report.
     */
    analyticsManagementUnsampledReportsDelete(req: operations.AnalyticsManagementUnsampledReportsDeleteRequest, security: operations.AnalyticsManagementUnsampledReportsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsDeleteResponse>;
    /**
     * Returns a single unsampled report.
     */
    analyticsManagementUnsampledReportsGet(req: operations.AnalyticsManagementUnsampledReportsGetRequest, security: operations.AnalyticsManagementUnsampledReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsGetResponse>;
    /**
     * Create a new unsampled report.
     */
    analyticsManagementUnsampledReportsInsert(req: operations.AnalyticsManagementUnsampledReportsInsertRequest, security: operations.AnalyticsManagementUnsampledReportsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsInsertResponse>;
    /**
     * Lists unsampled reports to which the user has access.
     */
    analyticsManagementUnsampledReportsList(req: operations.AnalyticsManagementUnsampledReportsListRequest, security: operations.AnalyticsManagementUnsampledReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsListResponse>;
    /**
     * Delete data associated with a previous upload.
     */
    analyticsManagementUploadsDeleteUploadData(req: operations.AnalyticsManagementUploadsDeleteUploadDataRequest, security: operations.AnalyticsManagementUploadsDeleteUploadDataSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsDeleteUploadDataResponse>;
    /**
     * List uploads to which the user has access.
     */
    analyticsManagementUploadsGet(req: operations.AnalyticsManagementUploadsGetRequest, security: operations.AnalyticsManagementUploadsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsGetResponse>;
    /**
     * List uploads to which the user has access.
     */
    analyticsManagementUploadsList(req: operations.AnalyticsManagementUploadsListRequest, security: operations.AnalyticsManagementUploadsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsListResponse>;
    /**
     * Upload data for a custom data source.
     */
    analyticsManagementUploadsUploadData(req: operations.AnalyticsManagementUploadsUploadDataRequest, security: operations.AnalyticsManagementUploadsUploadDataSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsUploadDataResponse>;
    /**
     * Deletes a web property-Google Ads link.
     */
    analyticsManagementWebPropertyAdWordsLinksDelete(req: operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse>;
    /**
     * Returns a web property-Google Ads link to which the user has access.
     */
    analyticsManagementWebPropertyAdWordsLinksGet(req: operations.AnalyticsManagementWebPropertyAdWordsLinksGetRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksGetResponse>;
    /**
     * Creates a webProperty-Google Ads link.
     */
    analyticsManagementWebPropertyAdWordsLinksInsert(req: operations.AnalyticsManagementWebPropertyAdWordsLinksInsertRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksInsertResponse>;
    /**
     * Lists webProperty-Google Ads links for a given web property.
     */
    analyticsManagementWebPropertyAdWordsLinksList(req: operations.AnalyticsManagementWebPropertyAdWordsLinksListRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksListResponse>;
    /**
     * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
     */
    analyticsManagementWebPropertyAdWordsLinksPatch(req: operations.AnalyticsManagementWebPropertyAdWordsLinksPatchRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksPatchResponse>;
    /**
     * Updates an existing webProperty-Google Ads link.
     */
    analyticsManagementWebPropertyAdWordsLinksUpdate(req: operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest, security: operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse>;
    /**
     * Gets a web property to which the user has access.
     */
    analyticsManagementWebpropertiesGet(req: operations.AnalyticsManagementWebpropertiesGetRequest, security: operations.AnalyticsManagementWebpropertiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesGetResponse>;
    /**
     * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
     */
    analyticsManagementWebpropertiesInsert(req: operations.AnalyticsManagementWebpropertiesInsertRequest, security: operations.AnalyticsManagementWebpropertiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesInsertResponse>;
    /**
     * Lists web properties to which the user has access.
     */
    analyticsManagementWebpropertiesList(req: operations.AnalyticsManagementWebpropertiesListRequest, security: operations.AnalyticsManagementWebpropertiesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesListResponse>;
    /**
     * Updates an existing web property. This method supports patch semantics.
     */
    analyticsManagementWebpropertiesPatch(req: operations.AnalyticsManagementWebpropertiesPatchRequest, security: operations.AnalyticsManagementWebpropertiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesPatchResponse>;
    /**
     * Updates an existing web property.
     */
    analyticsManagementWebpropertiesUpdate(req: operations.AnalyticsManagementWebpropertiesUpdateRequest, security: operations.AnalyticsManagementWebpropertiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesUpdateResponse>;
    /**
     * Removes a user from the given web property.
     */
    analyticsManagementWebpropertyUserLinksDelete(req: operations.AnalyticsManagementWebpropertyUserLinksDeleteRequest, security: operations.AnalyticsManagementWebpropertyUserLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksDeleteResponse>;
    /**
     * Adds a new user to the given web property.
     */
    analyticsManagementWebpropertyUserLinksInsert(req: operations.AnalyticsManagementWebpropertyUserLinksInsertRequest, security: operations.AnalyticsManagementWebpropertyUserLinksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksInsertResponse>;
    /**
     * Lists webProperty-user links for a given web property.
     */
    analyticsManagementWebpropertyUserLinksList(req: operations.AnalyticsManagementWebpropertyUserLinksListRequest, security: operations.AnalyticsManagementWebpropertyUserLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksListResponse>;
    /**
     * Updates permissions for an existing user on the given web property.
     */
    analyticsManagementWebpropertyUserLinksUpdate(req: operations.AnalyticsManagementWebpropertyUserLinksUpdateRequest, security: operations.AnalyticsManagementWebpropertyUserLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksUpdateResponse>;
}
