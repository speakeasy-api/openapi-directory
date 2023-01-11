package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsGetRequest {
    public AnalyticsManagementCustomMetricsGetPathParams pathParams;
    public AnalyticsManagementCustomMetricsGetRequest withPathParams(AnalyticsManagementCustomMetricsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomMetricsGetQueryParams queryParams;
    public AnalyticsManagementCustomMetricsGetRequest withQueryParams(AnalyticsManagementCustomMetricsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementCustomMetricsGetSecurity security;
    public AnalyticsManagementCustomMetricsGetRequest withSecurity(AnalyticsManagementCustomMetricsGetSecurity security) {
        this.security = security;
        return this;
    }
}