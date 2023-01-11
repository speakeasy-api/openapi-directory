package openapisdk.models.operations;



public class MonitoringProjectsUptimeCheckConfigsListRequest {
    public MonitoringProjectsUptimeCheckConfigsListPathParams pathParams;
    public MonitoringProjectsUptimeCheckConfigsListRequest withPathParams(MonitoringProjectsUptimeCheckConfigsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsUptimeCheckConfigsListQueryParams queryParams;
    public MonitoringProjectsUptimeCheckConfigsListRequest withQueryParams(MonitoringProjectsUptimeCheckConfigsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsUptimeCheckConfigsListSecurity security;
    public MonitoringProjectsUptimeCheckConfigsListRequest withSecurity(MonitoringProjectsUptimeCheckConfigsListSecurity security) {
        this.security = security;
        return this;
    }
}