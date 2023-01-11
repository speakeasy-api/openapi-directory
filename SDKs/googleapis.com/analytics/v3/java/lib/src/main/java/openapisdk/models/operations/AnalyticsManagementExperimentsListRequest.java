package openapisdk.models.operations;



public class AnalyticsManagementExperimentsListRequest {
    public AnalyticsManagementExperimentsListPathParams pathParams;
    public AnalyticsManagementExperimentsListRequest withPathParams(AnalyticsManagementExperimentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementExperimentsListQueryParams queryParams;
    public AnalyticsManagementExperimentsListRequest withQueryParams(AnalyticsManagementExperimentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementExperimentsListSecurity security;
    public AnalyticsManagementExperimentsListRequest withSecurity(AnalyticsManagementExperimentsListSecurity security) {
        this.security = security;
        return this;
    }
}