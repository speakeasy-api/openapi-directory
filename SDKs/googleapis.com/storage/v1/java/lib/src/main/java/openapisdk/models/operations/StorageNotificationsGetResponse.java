package openapisdk.models.operations;



public class StorageNotificationsGetResponse {
    public String contentType;
    public StorageNotificationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification notification;
    public StorageNotificationsGetResponse withNotification(openapisdk.models.shared.Notification notification) {
        this.notification = notification;
        return this;
    }
    public Long statusCode;
    public StorageNotificationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}