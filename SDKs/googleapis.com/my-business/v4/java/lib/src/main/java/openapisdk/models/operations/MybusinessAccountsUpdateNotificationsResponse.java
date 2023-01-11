package openapisdk.models.operations;



public class MybusinessAccountsUpdateNotificationsResponse {
    public String contentType;
    public MybusinessAccountsUpdateNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Notifications notifications;
    public MybusinessAccountsUpdateNotificationsResponse withNotifications(openapisdk.models.shared.Notifications notifications) {
        this.notifications = notifications;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsUpdateNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}