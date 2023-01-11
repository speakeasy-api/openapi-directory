package openapisdk.models.operations;



public class AnalyticsManagementFiltersListRequest {
    public AnalyticsManagementFiltersListPathParams pathParams;
    public AnalyticsManagementFiltersListRequest withPathParams(AnalyticsManagementFiltersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementFiltersListQueryParams queryParams;
    public AnalyticsManagementFiltersListRequest withQueryParams(AnalyticsManagementFiltersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementFiltersListSecurity security;
    public AnalyticsManagementFiltersListRequest withSecurity(AnalyticsManagementFiltersListSecurity security) {
        this.security = security;
        return this;
    }
}