package openapisdk.models.operations;



public class AnalyticsManagementGoalsListRequest {
    public AnalyticsManagementGoalsListPathParams pathParams;
    public AnalyticsManagementGoalsListRequest withPathParams(AnalyticsManagementGoalsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementGoalsListQueryParams queryParams;
    public AnalyticsManagementGoalsListRequest withQueryParams(AnalyticsManagementGoalsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementGoalsListSecurity security;
    public AnalyticsManagementGoalsListRequest withSecurity(AnalyticsManagementGoalsListSecurity security) {
        this.security = security;
        return this;
    }
}