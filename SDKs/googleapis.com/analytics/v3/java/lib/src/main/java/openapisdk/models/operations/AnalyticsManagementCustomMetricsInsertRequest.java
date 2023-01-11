package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomMetricsInsertRequest {
    public AnalyticsManagementCustomMetricsInsertPathParams pathParams;
    public AnalyticsManagementCustomMetricsInsertRequest withPathParams(AnalyticsManagementCustomMetricsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomMetricsInsertQueryParams queryParams;
    public AnalyticsManagementCustomMetricsInsertRequest withQueryParams(AnalyticsManagementCustomMetricsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomMetricInput request;
    public AnalyticsManagementCustomMetricsInsertRequest withRequest(openapisdk.models.shared.CustomMetricInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomMetricsInsertSecurity security;
    public AnalyticsManagementCustomMetricsInsertRequest withSecurity(AnalyticsManagementCustomMetricsInsertSecurity security) {
        this.security = security;
        return this;
    }
}