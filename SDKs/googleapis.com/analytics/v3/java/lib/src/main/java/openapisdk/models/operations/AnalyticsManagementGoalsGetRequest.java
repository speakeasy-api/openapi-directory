package openapisdk.models.operations;



public class AnalyticsManagementGoalsGetRequest {
    public AnalyticsManagementGoalsGetPathParams pathParams;
    public AnalyticsManagementGoalsGetRequest withPathParams(AnalyticsManagementGoalsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementGoalsGetQueryParams queryParams;
    public AnalyticsManagementGoalsGetRequest withQueryParams(AnalyticsManagementGoalsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementGoalsGetSecurity security;
    public AnalyticsManagementGoalsGetRequest withSecurity(AnalyticsManagementGoalsGetSecurity security) {
        this.security = security;
        return this;
    }
}