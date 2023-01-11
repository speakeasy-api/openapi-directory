package openapisdk.models.operations;



public class MonitoringProjectsGroupsListRequest {
    public MonitoringProjectsGroupsListPathParams pathParams;
    public MonitoringProjectsGroupsListRequest withPathParams(MonitoringProjectsGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsGroupsListQueryParams queryParams;
    public MonitoringProjectsGroupsListRequest withQueryParams(MonitoringProjectsGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsGroupsListSecurity security;
    public MonitoringProjectsGroupsListRequest withSecurity(MonitoringProjectsGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}