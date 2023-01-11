package openapisdk.models.operations;



public class AnalyticsManagementProfilesListRequest {
    public AnalyticsManagementProfilesListPathParams pathParams;
    public AnalyticsManagementProfilesListRequest withPathParams(AnalyticsManagementProfilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfilesListQueryParams queryParams;
    public AnalyticsManagementProfilesListRequest withQueryParams(AnalyticsManagementProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementProfilesListSecurity security;
    public AnalyticsManagementProfilesListRequest withSecurity(AnalyticsManagementProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}