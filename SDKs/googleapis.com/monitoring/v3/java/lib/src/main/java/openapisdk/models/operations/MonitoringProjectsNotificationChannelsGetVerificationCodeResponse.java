package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelsGetVerificationCodeResponse {
    public String contentType;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNotificationChannelVerificationCodeResponse getNotificationChannelVerificationCodeResponse;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeResponse withGetNotificationChannelVerificationCodeResponse(openapisdk.models.shared.GetNotificationChannelVerificationCodeResponse getNotificationChannelVerificationCodeResponse) {
        this.getNotificationChannelVerificationCodeResponse = getNotificationChannelVerificationCodeResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsNotificationChannelsGetVerificationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}