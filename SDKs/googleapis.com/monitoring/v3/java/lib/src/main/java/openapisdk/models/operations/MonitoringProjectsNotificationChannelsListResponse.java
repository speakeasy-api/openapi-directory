package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelsListResponse {
    public String contentType;
    public MonitoringProjectsNotificationChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNotificationChannelsResponse listNotificationChannelsResponse;
    public MonitoringProjectsNotificationChannelsListResponse withListNotificationChannelsResponse(openapisdk.models.shared.ListNotificationChannelsResponse listNotificationChannelsResponse) {
        this.listNotificationChannelsResponse = listNotificationChannelsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsNotificationChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}