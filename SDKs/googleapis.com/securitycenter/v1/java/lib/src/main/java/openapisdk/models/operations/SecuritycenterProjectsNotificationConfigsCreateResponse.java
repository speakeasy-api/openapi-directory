package openapisdk.models.operations;



public class SecuritycenterProjectsNotificationConfigsCreateResponse {
    public String contentType;
    public SecuritycenterProjectsNotificationConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationConfig notificationConfig;
    public SecuritycenterProjectsNotificationConfigsCreateResponse withNotificationConfig(openapisdk.models.shared.NotificationConfig notificationConfig) {
        this.notificationConfig = notificationConfig;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsNotificationConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}