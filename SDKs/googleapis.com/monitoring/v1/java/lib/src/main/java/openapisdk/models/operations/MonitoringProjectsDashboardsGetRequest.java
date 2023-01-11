package openapisdk.models.operations;



public class MonitoringProjectsDashboardsGetRequest {
    public MonitoringProjectsDashboardsGetPathParams pathParams;
    public MonitoringProjectsDashboardsGetRequest withPathParams(MonitoringProjectsDashboardsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsDashboardsGetQueryParams queryParams;
    public MonitoringProjectsDashboardsGetRequest withQueryParams(MonitoringProjectsDashboardsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsDashboardsGetSecurity security;
    public MonitoringProjectsDashboardsGetRequest withSecurity(MonitoringProjectsDashboardsGetSecurity security) {
        this.security = security;
        return this;
    }
}