package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelDescriptorsListRequest {
    public MonitoringProjectsNotificationChannelDescriptorsListPathParams pathParams;
    public MonitoringProjectsNotificationChannelDescriptorsListRequest withPathParams(MonitoringProjectsNotificationChannelDescriptorsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelDescriptorsListQueryParams queryParams;
    public MonitoringProjectsNotificationChannelDescriptorsListRequest withQueryParams(MonitoringProjectsNotificationChannelDescriptorsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelDescriptorsListSecurity security;
    public MonitoringProjectsNotificationChannelDescriptorsListRequest withSecurity(MonitoringProjectsNotificationChannelDescriptorsListSecurity security) {
        this.security = security;
        return this;
    }
}