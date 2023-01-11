package openapisdk.models.operations;



public class StorageNotificationsListResponse {
    public String contentType;
    public StorageNotificationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notifications notifications;
    public StorageNotificationsListResponse withNotifications(openapisdk.models.shared.Notifications notifications) {
        this.notifications = notifications;
        return this;
    }
    public Long statusCode;
    public StorageNotificationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}