package openapisdk.models.operations;



public class GetNotificationsResponse {
    public String contentType;
    public GetNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notification[] notifications;
    public GetNotificationsResponse withNotifications(openapisdk.models.shared.Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    public Long statusCode;
    public GetNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}