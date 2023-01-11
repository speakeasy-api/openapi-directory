package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomMetricsCreateRequest {
    public AnalyticsadminPropertiesCustomMetricsCreatePathParams pathParams;
    public AnalyticsadminPropertiesCustomMetricsCreateRequest withPathParams(AnalyticsadminPropertiesCustomMetricsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesCustomMetricsCreateQueryParams queryParams;
    public AnalyticsadminPropertiesCustomMetricsCreateRequest withQueryParams(AnalyticsadminPropertiesCustomMetricsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetricInput request;
    public AnalyticsadminPropertiesCustomMetricsCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetricInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesCustomMetricsCreateSecurity security;
    public AnalyticsadminPropertiesCustomMetricsCreateRequest withSecurity(AnalyticsadminPropertiesCustomMetricsCreateSecurity security) {
        this.security = security;
        return this;
    }
}