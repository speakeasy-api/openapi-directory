package openapisdk.models.operations;



public class PostNotificationsResponse {
    public String contentType;
    public PostNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification notification;
    public PostNotificationsResponse withNotification(openapisdk.models.shared.Notification notification) {
        this.notification = notification;
        return this;
    }
    public Long statusCode;
    public PostNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}