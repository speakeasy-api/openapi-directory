package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeNotificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationSubscription request;
    public SubscribeNotificationRequest withRequest(openapisdk.models.shared.NotificationSubscription request) {
        this.request = request;
        return this;
    }
}