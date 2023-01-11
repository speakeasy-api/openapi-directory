package openapisdk.models.operations;



public class PutNotificationsIdResponse {
    public String contentType;
    public PutNotificationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification notification;
    public PutNotificationsIdResponse withNotification(openapisdk.models.shared.Notification notification) {
        this.notification = notification;
        return this;
    }
    public Long statusCode;
    public PutNotificationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}