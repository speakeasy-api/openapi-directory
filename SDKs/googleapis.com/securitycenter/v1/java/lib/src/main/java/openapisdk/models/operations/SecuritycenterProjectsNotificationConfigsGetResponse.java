package openapisdk.models.operations;



public class SecuritycenterProjectsNotificationConfigsGetResponse {
    public String contentType;
    public SecuritycenterProjectsNotificationConfigsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationConfig notificationConfig;
    public SecuritycenterProjectsNotificationConfigsGetResponse withNotificationConfig(openapisdk.models.shared.NotificationConfig notificationConfig) {
        this.notificationConfig = notificationConfig;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsNotificationConfigsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}