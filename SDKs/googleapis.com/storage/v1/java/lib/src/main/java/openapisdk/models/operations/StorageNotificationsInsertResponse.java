package openapisdk.models.operations;



public class StorageNotificationsInsertResponse {
    public String contentType;
    public StorageNotificationsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification notification;
    public StorageNotificationsInsertResponse withNotification(openapisdk.models.shared.Notification notification) {
        this.notification = notification;
        return this;
    }
    public Long statusCode;
    public StorageNotificationsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}