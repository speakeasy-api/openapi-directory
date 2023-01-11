package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomMetricsUpdateRequest {
    public AnalyticsManagementCustomMetricsUpdatePathParams pathParams;
    public AnalyticsManagementCustomMetricsUpdateRequest withPathParams(AnalyticsManagementCustomMetricsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomMetricsUpdateQueryParams queryParams;
    public AnalyticsManagementCustomMetricsUpdateRequest withQueryParams(AnalyticsManagementCustomMetricsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomMetricInput request;
    public AnalyticsManagementCustomMetricsUpdateRequest withRequest(openapisdk.models.shared.CustomMetricInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomMetricsUpdateSecurity security;
    public AnalyticsManagementCustomMetricsUpdateRequest withSecurity(AnalyticsManagementCustomMetricsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}