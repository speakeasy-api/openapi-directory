package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsListRequest {
    public AnalyticsManagementCustomDimensionsListPathParams pathParams;
    public AnalyticsManagementCustomDimensionsListRequest withPathParams(AnalyticsManagementCustomDimensionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsListQueryParams queryParams;
    public AnalyticsManagementCustomDimensionsListRequest withQueryParams(AnalyticsManagementCustomDimensionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsListSecurity security;
    public AnalyticsManagementCustomDimensionsListRequest withSecurity(AnalyticsManagementCustomDimensionsListSecurity security) {
        this.security = security;
        return this;
    }
}