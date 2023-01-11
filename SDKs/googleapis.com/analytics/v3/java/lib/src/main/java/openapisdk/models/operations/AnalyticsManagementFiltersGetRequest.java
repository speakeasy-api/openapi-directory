package openapisdk.models.operations;



public class AnalyticsManagementFiltersGetRequest {
    public AnalyticsManagementFiltersGetPathParams pathParams;
    public AnalyticsManagementFiltersGetRequest withPathParams(AnalyticsManagementFiltersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementFiltersGetQueryParams queryParams;
    public AnalyticsManagementFiltersGetRequest withQueryParams(AnalyticsManagementFiltersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementFiltersGetSecurity security;
    public AnalyticsManagementFiltersGetRequest withSecurity(AnalyticsManagementFiltersGetSecurity security) {
        this.security = security;
        return this;
    }
}