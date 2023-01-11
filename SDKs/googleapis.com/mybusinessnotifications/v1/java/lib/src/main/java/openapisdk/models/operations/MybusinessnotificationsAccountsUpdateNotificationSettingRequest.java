package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessnotificationsAccountsUpdateNotificationSettingRequest {
    public MybusinessnotificationsAccountsUpdateNotificationSettingPathParams pathParams;
    public MybusinessnotificationsAccountsUpdateNotificationSettingRequest withPathParams(MybusinessnotificationsAccountsUpdateNotificationSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams queryParams;
    public MybusinessnotificationsAccountsUpdateNotificationSettingRequest withQueryParams(MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationSetting request;
    public MybusinessnotificationsAccountsUpdateNotificationSettingRequest withRequest(openapisdk.models.shared.NotificationSetting request) {
        this.request = request;
        return this;
    }
}