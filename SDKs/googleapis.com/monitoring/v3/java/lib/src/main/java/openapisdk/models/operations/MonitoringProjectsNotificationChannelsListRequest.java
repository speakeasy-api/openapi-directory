package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelsListRequest {
    public MonitoringProjectsNotificationChannelsListPathParams pathParams;
    public MonitoringProjectsNotificationChannelsListRequest withPathParams(MonitoringProjectsNotificationChannelsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelsListQueryParams queryParams;
    public MonitoringProjectsNotificationChannelsListRequest withQueryParams(MonitoringProjectsNotificationChannelsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelsListSecurity security;
    public MonitoringProjectsNotificationChannelsListRequest withSecurity(MonitoringProjectsNotificationChannelsListSecurity security) {
        this.security = security;
        return this;
    }
}