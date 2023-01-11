package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsGetVerificationCodeRequest {
    public MonitoringProjectsNotificationChannelsGetVerificationCodePathParams pathParams;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeRequest withPathParams(MonitoringProjectsNotificationChannelsGetVerificationCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams queryParams;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeRequest withQueryParams(MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetNotificationChannelVerificationCodeRequest request;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeRequest withRequest(openapisdk.models.shared.GetNotificationChannelVerificationCodeRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity security;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeRequest withSecurity(MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity security) {
        this.security = security;
        return this;
    }
}