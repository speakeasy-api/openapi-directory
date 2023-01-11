package openapisdk.models.operations;



public class MybusinessnotificationsAccountsGetNotificationSettingResponse {
    public String contentType;
    public MybusinessnotificationsAccountsGetNotificationSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationSetting notificationSetting;
    public MybusinessnotificationsAccountsGetNotificationSettingResponse withNotificationSetting(openapisdk.models.shared.NotificationSetting notificationSetting) {
        this.notificationSetting = notificationSetting;
        return this;
    }
    public Long statusCode;
    public MybusinessnotificationsAccountsGetNotificationSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}