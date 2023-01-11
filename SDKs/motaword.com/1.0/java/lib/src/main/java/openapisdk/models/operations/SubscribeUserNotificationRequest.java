package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeUserNotificationRequest {
    public SubscribeUserNotificationPathParams pathParams;
    public SubscribeUserNotificationRequest withPathParams(SubscribeUserNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationSubscription request;
    public SubscribeUserNotificationRequest withRequest(openapisdk.models.shared.NotificationSubscription request) {
        this.request = request;
        return this;
    }
    public SubscribeUserNotificationSecurity security;
    public SubscribeUserNotificationRequest withSecurity(SubscribeUserNotificationSecurity security) {
        this.security = security;
        return this;
    }
}