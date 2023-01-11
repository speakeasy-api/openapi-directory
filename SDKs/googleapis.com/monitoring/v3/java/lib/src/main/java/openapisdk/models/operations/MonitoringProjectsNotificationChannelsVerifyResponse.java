package openapisdk.models.operations;



public class MonitoringProjectsNotificationChannelsVerifyResponse {
    public String contentType;
    public MonitoringProjectsNotificationChannelsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationChannel notificationChannel;
    public MonitoringProjectsNotificationChannelsVerifyResponse withNotificationChannel(openapisdk.models.shared.NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsNotificationChannelsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}