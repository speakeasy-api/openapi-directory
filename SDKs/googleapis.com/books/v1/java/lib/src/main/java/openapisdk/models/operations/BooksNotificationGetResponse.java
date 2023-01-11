package openapisdk.models.operations;



public class BooksNotificationGetResponse {
    public String contentType;
    public BooksNotificationGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification notification;
    public BooksNotificationGetResponse withNotification(openapisdk.models.shared.Notification notification) {
        this.notification = notification;
        return this;
    }
    public Long statusCode;
    public BooksNotificationGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}