package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsCreateRequest {
    public AnalyticsadminPropertiesDataStreamsCreatePathParams pathParams;
    public AnalyticsadminPropertiesDataStreamsCreateRequest withPathParams(AnalyticsadminPropertiesDataStreamsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsCreateQueryParams queryParams;
    public AnalyticsadminPropertiesDataStreamsCreateRequest withQueryParams(AnalyticsadminPropertiesDataStreamsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStreamInput request;
    public AnalyticsadminPropertiesDataStreamsCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStreamInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsCreateSecurity security;
    public AnalyticsadminPropertiesDataStreamsCreateRequest withSecurity(AnalyticsadminPropertiesDataStreamsCreateSecurity security) {
        this.security = security;
        return this;
    }
}