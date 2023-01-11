package openapisdk.models.operations;



public class MybusinessnotificationsAccountsUpdateNotificationSettingResponse {
    public String contentType;
    public MybusinessnotificationsAccountsUpdateNotificationSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationSetting notificationSetting;
    public MybusinessnotificationsAccountsUpdateNotificationSettingResponse withNotificationSetting(openapisdk.models.shared.NotificationSetting notificationSetting) {
        this.notificationSetting = notificationSetting;
        return this;
    }
    public Long statusCode;
    public MybusinessnotificationsAccountsUpdateNotificationSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}