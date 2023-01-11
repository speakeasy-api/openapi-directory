package openapisdk.models.operations;



public class MonitoringProjectsSnoozesListRequest {
    public MonitoringProjectsSnoozesListPathParams pathParams;
    public MonitoringProjectsSnoozesListRequest withPathParams(MonitoringProjectsSnoozesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsSnoozesListQueryParams queryParams;
    public MonitoringProjectsSnoozesListRequest withQueryParams(MonitoringProjectsSnoozesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsSnoozesListSecurity security;
    public MonitoringProjectsSnoozesListRequest withSecurity(MonitoringProjectsSnoozesListSecurity security) {
        this.security = security;
        return this;
    }
}