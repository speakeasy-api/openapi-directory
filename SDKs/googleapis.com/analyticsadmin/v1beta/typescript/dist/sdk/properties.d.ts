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
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     */
    analyticsadminPropertiesAcknowledgeUserDataCollection(req: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, security: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse>;
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
     * Lookup for a single "GA4" MeasurementProtocolSecret.
     */
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest, security: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse>;
    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     */
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, security: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse>;
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
     * Deletes a GoogleAdsLink on a property
     */
    analyticsadminPropertiesGoogleAdsLinksDelete(req: operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest, security: operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse>;
    /**
     * Lists GoogleAdsLinks on a property.
     */
    analyticsadminPropertiesGoogleAdsLinksList(req: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest, security: operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse>;
    /**
     * Updates a GoogleAdsLink on a property
     */
    analyticsadminPropertiesGoogleAdsLinksPatch(req: operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest, security: operations.AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse>;
    /**
     * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     */
    analyticsadminPropertiesList(req: operations.AnalyticsadminPropertiesListRequest, security: operations.AnalyticsadminPropertiesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesListResponse>;
    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
     */
    analyticsadminPropertiesRunAccessReport(req: operations.AnalyticsadminPropertiesRunAccessReportRequest, security: operations.AnalyticsadminPropertiesRunAccessReportSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesRunAccessReportResponse>;
}
