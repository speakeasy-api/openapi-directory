package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeUserNotificationRequest {
    public UnsubscribeUserNotificationPathParams pathParams;
    public UnsubscribeUserNotificationRequest withPathParams(UnsubscribeUserNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationSubscription request;
    public UnsubscribeUserNotificationRequest withRequest(openapisdk.models.shared.NotificationSubscription request) {
        this.request = request;
        return this;
    }
    public UnsubscribeUserNotificationSecurity security;
    public UnsubscribeUserNotificationRequest withSecurity(UnsubscribeUserNotificationSecurity security) {
        this.security = security;
        return this;
    }
}