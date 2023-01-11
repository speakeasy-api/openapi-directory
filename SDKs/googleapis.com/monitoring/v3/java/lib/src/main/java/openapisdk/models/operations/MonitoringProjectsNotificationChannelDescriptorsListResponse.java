package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelDescriptorsListResponse {
    public String contentType;
    public MonitoringProjectsNotificationChannelDescriptorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNotificationChannelDescriptorsResponse listNotificationChannelDescriptorsResponse;
    public MonitoringProjectsNotificationChannelDescriptorsListResponse withListNotificationChannelDescriptorsResponse(openapisdk.models.shared.ListNotificationChannelDescriptorsResponse listNotificationChannelDescriptorsResponse) {
        this.listNotificationChannelDescriptorsResponse = listNotificationChannelDescriptorsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsNotificationChannelDescriptorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}