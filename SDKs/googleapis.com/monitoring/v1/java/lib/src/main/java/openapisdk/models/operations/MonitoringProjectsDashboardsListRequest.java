package openapisdk.models.operations;



public class MonitoringProjectsDashboardsListRequest {
    public MonitoringProjectsDashboardsListPathParams pathParams;
    public MonitoringProjectsDashboardsListRequest withPathParams(MonitoringProjectsDashboardsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsDashboardsListQueryParams queryParams;
    public MonitoringProjectsDashboardsListRequest withQueryParams(MonitoringProjectsDashboardsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsDashboardsListSecurity security;
    public MonitoringProjectsDashboardsListRequest withSecurity(MonitoringProjectsDashboardsListSecurity security) {
        this.security = security;
        return this;
    }
}