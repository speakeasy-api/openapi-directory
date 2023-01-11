package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesListRequest {
    public AnalyticsManagementWebpropertiesListPathParams pathParams;
    public AnalyticsManagementWebpropertiesListRequest withPathParams(AnalyticsManagementWebpropertiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertiesListQueryParams queryParams;
    public AnalyticsManagementWebpropertiesListRequest withQueryParams(AnalyticsManagementWebpropertiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementWebpropertiesListSecurity security;
    public AnalyticsManagementWebpropertiesListRequest withSecurity(AnalyticsManagementWebpropertiesListSecurity security) {
        this.security = security;
        return this;
    }
}