package openapisdk.models.operations;



public class MonitoringProjectsMonitoredResourceDescriptorsListRequest {
    public MonitoringProjectsMonitoredResourceDescriptorsListPathParams pathParams;
    public MonitoringProjectsMonitoredResourceDescriptorsListRequest withPathParams(MonitoringProjectsMonitoredResourceDescriptorsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsMonitoredResourceDescriptorsListQueryParams queryParams;
    public MonitoringProjectsMonitoredResourceDescriptorsListRequest withQueryParams(MonitoringProjectsMonitoredResourceDescriptorsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsMonitoredResourceDescriptorsListSecurity security;
    public MonitoringProjectsMonitoredResourceDescriptorsListRequest withSecurity(MonitoringProjectsMonitoredResourceDescriptorsListSecurity security) {
        this.security = security;
        return this;
    }
}