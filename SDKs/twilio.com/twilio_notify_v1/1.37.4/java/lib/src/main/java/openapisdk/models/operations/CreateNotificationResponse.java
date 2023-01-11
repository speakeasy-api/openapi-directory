package openapisdk.models.operations;



public class CreateNotificationResponse {
    public String contentType;
    public CreateNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1ServiceNotification notifyV1ServiceNotification;
    public CreateNotificationResponse withNotifyV1ServiceNotification(openapisdk.models.shared.NotifyV1ServiceNotification notifyV1ServiceNotification) {
        this.notifyV1ServiceNotification = notifyV1ServiceNotification;
        return this;
    }
}