package openapisdk.models.operations;



public class AnalyticsManagementCustomDataSourcesListRequest {
    public AnalyticsManagementCustomDataSourcesListPathParams pathParams;
    public AnalyticsManagementCustomDataSourcesListRequest withPathParams(AnalyticsManagementCustomDataSourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDataSourcesListQueryParams queryParams;
    public AnalyticsManagementCustomDataSourcesListRequest withQueryParams(AnalyticsManagementCustomDataSourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementCustomDataSourcesListSecurity security;
    public AnalyticsManagementCustomDataSourcesListRequest withSecurity(AnalyticsManagementCustomDataSourcesListSecurity security) {
        this.security = security;
        return this;
    }
}