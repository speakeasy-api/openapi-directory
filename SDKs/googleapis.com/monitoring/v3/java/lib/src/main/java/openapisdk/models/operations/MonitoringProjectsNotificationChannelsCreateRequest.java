package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsCreateRequest {
    public MonitoringProjectsNotificationChannelsCreatePathParams pathParams;
    public MonitoringProjectsNotificationChannelsCreateRequest withPathParams(MonitoringProjectsNotificationChannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelsCreateQueryParams queryParams;
    public MonitoringProjectsNotificationChannelsCreateRequest withQueryParams(MonitoringProjectsNotificationChannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationChannel request;
    public MonitoringProjectsNotificationChannelsCreateRequest withRequest(openapisdk.models.shared.NotificationChannel request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsNotificationChannelsCreateSecurity security;
    public MonitoringProjectsNotificationChannelsCreateRequest withSecurity(MonitoringProjectsNotificationChannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}