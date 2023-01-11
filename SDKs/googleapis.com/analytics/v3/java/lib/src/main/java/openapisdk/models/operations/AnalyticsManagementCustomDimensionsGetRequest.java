package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsGetRequest {
    public AnalyticsManagementCustomDimensionsGetPathParams pathParams;
    public AnalyticsManagementCustomDimensionsGetRequest withPathParams(AnalyticsManagementCustomDimensionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsGetQueryParams queryParams;
    public AnalyticsManagementCustomDimensionsGetRequest withQueryParams(AnalyticsManagementCustomDimensionsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsGetSecurity security;
    public AnalyticsManagementCustomDimensionsGetRequest withSecurity(AnalyticsManagementCustomDimensionsGetSecurity security) {
        this.security = security;
        return this;
    }
}