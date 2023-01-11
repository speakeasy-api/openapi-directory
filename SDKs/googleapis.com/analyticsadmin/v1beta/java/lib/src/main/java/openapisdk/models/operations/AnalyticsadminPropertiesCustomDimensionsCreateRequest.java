package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomDimensionsCreateRequest {
    public AnalyticsadminPropertiesCustomDimensionsCreatePathParams pathParams;
    public AnalyticsadminPropertiesCustomDimensionsCreateRequest withPathParams(AnalyticsadminPropertiesCustomDimensionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesCustomDimensionsCreateQueryParams queryParams;
    public AnalyticsadminPropertiesCustomDimensionsCreateRequest withQueryParams(AnalyticsadminPropertiesCustomDimensionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimensionInput request;
    public AnalyticsadminPropertiesCustomDimensionsCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimensionInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesCustomDimensionsCreateSecurity security;
    public AnalyticsadminPropertiesCustomDimensionsCreateRequest withSecurity(AnalyticsadminPropertiesCustomDimensionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}