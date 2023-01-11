package openapisdk.models.operations;



public class AnalyticsManagementExperimentsGetRequest {
    public AnalyticsManagementExperimentsGetPathParams pathParams;
    public AnalyticsManagementExperimentsGetRequest withPathParams(AnalyticsManagementExperimentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementExperimentsGetQueryParams queryParams;
    public AnalyticsManagementExperimentsGetRequest withQueryParams(AnalyticsManagementExperimentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementExperimentsGetSecurity security;
    public AnalyticsManagementExperimentsGetRequest withSecurity(AnalyticsManagementExperimentsGetSecurity security) {
        this.security = security;
        return this;
    }
}