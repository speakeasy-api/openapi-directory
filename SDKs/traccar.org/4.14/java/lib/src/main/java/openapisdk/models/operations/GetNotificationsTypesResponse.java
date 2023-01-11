package openapisdk.models.operations;



public class GetNotificationsTypesResponse {
    public String contentType;
    public GetNotificationsTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationType[] notificationTypes;
    public GetNotificationsTypesResponse withNotificationTypes(openapisdk.models.shared.NotificationType[] notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    }
    public Long statusCode;
    public GetNotificationsTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}