package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomMetricsPatchRequest {
    public AnalyticsManagementCustomMetricsPatchPathParams pathParams;
    public AnalyticsManagementCustomMetricsPatchRequest withPathParams(AnalyticsManagementCustomMetricsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomMetricsPatchQueryParams queryParams;
    public AnalyticsManagementCustomMetricsPatchRequest withQueryParams(AnalyticsManagementCustomMetricsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomMetricInput request;
    public AnalyticsManagementCustomMetricsPatchRequest withRequest(openapisdk.models.shared.CustomMetricInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomMetricsPatchSecurity security;
    public AnalyticsManagementCustomMetricsPatchRequest withSecurity(AnalyticsManagementCustomMetricsPatchSecurity security) {
        this.security = security;
        return this;
    }
}