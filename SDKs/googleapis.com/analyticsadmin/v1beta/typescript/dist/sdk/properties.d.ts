import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsadminPropertiesAcknowledgeUserDataCollection - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
    **/
    analyticsadminPropertiesAcknowledgeUserDataCollection(req: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse>;
    /**
     * analyticsadminPropertiesConversionEventsCreate - Creates a conversion event with the specified attributes.
    **/
    analyticsadminPropertiesConversionEventsCreate(req: operations.AnalyticsadminPropertiesConversionEventsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsCreateResponse>;
    /**
     * analyticsadminPropertiesConversionEventsList - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
    **/
    analyticsadminPropertiesConversionEventsList(req: operations.AnalyticsadminPropertiesConversionEventsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsListResponse>;
    /**
     * analyticsadminPropertiesCreate - Creates an "GA4" property with the specified location and attributes.
    **/
    analyticsadminPropertiesCreate(req: operations.AnalyticsadminPropertiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCreateResponse>;
    /**
     * analyticsadminPropertiesCustomDimensionsCreate - Creates a CustomDimension.
    **/
    analyticsadminPropertiesCustomDimensionsCreate(req: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse>;
    /**
     * analyticsadminPropertiesCustomDimensionsList - Lists CustomDimensions on a property.
    **/
    analyticsadminPropertiesCustomDimensionsList(req: operations.AnalyticsadminPropertiesCustomDimensionsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsListResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsArchive - Archives a CustomMetric on a property.
    **/
    analyticsadminPropertiesCustomMetricsArchive(req: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsCreate - Creates a CustomMetric.
    **/
    analyticsadminPropertiesCustomMetricsCreate(req: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsCreateResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsList - Lists CustomMetrics on a property.
    **/
    analyticsadminPropertiesCustomMetricsList(req: operations.AnalyticsadminPropertiesCustomMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsListResponse>;
    /**
     * analyticsadminPropertiesDataStreamsCreate - Creates a DataStream.
    **/
    analyticsadminPropertiesDataStreamsCreate(req: operations.AnalyticsadminPropertiesDataStreamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsCreateResponse>;
    /**
     * analyticsadminPropertiesDataStreamsList - Lists DataStreams on a property.
    **/
    analyticsadminPropertiesDataStreamsList(req: operations.AnalyticsadminPropertiesDataStreamsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsListResponse>;
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate - Creates a measurement protocol secret.
    **/
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse>;
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet - Lookup for a single "GA4" MeasurementProtocolSecret.
    **/
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse>;
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList - Returns child MeasurementProtocolSecrets under the specified parent Property.
    **/
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse>;
    /**
     * analyticsadminPropertiesFirebaseLinksCreate - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
    **/
    analyticsadminPropertiesFirebaseLinksCreate(req: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse>;
    /**
     * analyticsadminPropertiesFirebaseLinksList - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
    **/
    analyticsadminPropertiesFirebaseLinksList(req: operations.AnalyticsadminPropertiesFirebaseLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksListResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksCreate - Creates a GoogleAdsLink.
    **/
    analyticsadminPropertiesGoogleAdsLinksCreate(req: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksDelete - Deletes a GoogleAdsLink on a property
    **/
    analyticsadminPropertiesGoogleAdsLinksDelete(req: operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksList - Lists GoogleAdsLinks on a property.
    **/
    analyticsadminPropertiesGoogleAdsLinksList(req: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksPatch - Updates a GoogleAdsLink on a property
    **/
    analyticsadminPropertiesGoogleAdsLinksPatch(req: operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse>;
    /**
     * analyticsadminPropertiesList - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
    **/
    analyticsadminPropertiesList(req: operations.AnalyticsadminPropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesListResponse>;
}
