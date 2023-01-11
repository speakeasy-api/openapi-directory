package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelsCreateResponse {
    public String contentType;
    public MonitoringProjectsNotificationChannelsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationChannel notificationChannel;
    public MonitoringProjectsNotificationChannelsCreateResponse withNotificationChannel(openapisdk.models.shared.NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsNotificationChannelsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}