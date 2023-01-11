package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCreateRequest {
    public AnalyticsadminPropertiesCreateQueryParams queryParams;
    public AnalyticsadminPropertiesCreateRequest withQueryParams(AnalyticsadminPropertiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaPropertyInput request;
    public AnalyticsadminPropertiesCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaPropertyInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesCreateSecurity security;
    public AnalyticsadminPropertiesCreateRequest withSecurity(AnalyticsadminPropertiesCreateSecurity security) {
        this.security = security;
        return this;
    }
}