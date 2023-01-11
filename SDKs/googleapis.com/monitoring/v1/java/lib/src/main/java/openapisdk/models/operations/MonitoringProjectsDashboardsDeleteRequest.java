package openapisdk.models.operations;



public class MonitoringProjectsDashboardsDeleteRequest {
    public MonitoringProjectsDashboardsDeletePathParams pathParams;
    public MonitoringProjectsDashboardsDeleteRequest withPathParams(MonitoringProjectsDashboardsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsDashboardsDeleteQueryParams queryParams;
    public MonitoringProjectsDashboardsDeleteRequest withQueryParams(MonitoringProjectsDashboardsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsDashboardsDeleteSecurity security;
    public MonitoringProjectsDashboardsDeleteRequest withSecurity(MonitoringProjectsDashboardsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}