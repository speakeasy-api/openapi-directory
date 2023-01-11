package openapisdk.models.operations;



public class AnalyticsManagementProfilesGetRequest {
    public AnalyticsManagementProfilesGetPathParams pathParams;
    public AnalyticsManagementProfilesGetRequest withPathParams(AnalyticsManagementProfilesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfilesGetQueryParams queryParams;
    public AnalyticsManagementProfilesGetRequest withQueryParams(AnalyticsManagementProfilesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementProfilesGetSecurity security;
    public AnalyticsManagementProfilesGetRequest withSecurity(AnalyticsManagementProfilesGetSecurity security) {
        this.security = security;
        return this;
    }
}