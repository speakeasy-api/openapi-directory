package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesConversionEventsCreateRequest {
    public AnalyticsadminPropertiesConversionEventsCreatePathParams pathParams;
    public AnalyticsadminPropertiesConversionEventsCreateRequest withPathParams(AnalyticsadminPropertiesConversionEventsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesConversionEventsCreateQueryParams queryParams;
    public AnalyticsadminPropertiesConversionEventsCreateRequest withQueryParams(AnalyticsadminPropertiesConversionEventsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEventInput request;
    public AnalyticsadminPropertiesConversionEventsCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEventInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesConversionEventsCreateSecurity security;
    public AnalyticsadminPropertiesConversionEventsCreateRequest withSecurity(AnalyticsadminPropertiesConversionEventsCreateSecurity security) {
        this.security = security;
        return this;
    }
}