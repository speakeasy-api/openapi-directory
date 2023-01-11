package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsVerifyRequest {
    public MonitoringProjectsNotificationChannelsVerifyPathParams pathParams;
    public MonitoringProjectsNotificationChannelsVerifyRequest withPathParams(MonitoringProjectsNotificationChannelsVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelsVerifyQueryParams queryParams;
    public MonitoringProjectsNotificationChannelsVerifyRequest withQueryParams(MonitoringProjectsNotificationChannelsVerifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyNotificationChannelRequest request;
    public MonitoringProjectsNotificationChannelsVerifyRequest withRequest(openapisdk.models.shared.VerifyNotificationChannelRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsNotificationChannelsVerifySecurity security;
    public MonitoringProjectsNotificationChannelsVerifyRequest withSecurity(MonitoringProjectsNotificationChannelsVerifySecurity security) {
        this.security = security;
        return this;
    }
}