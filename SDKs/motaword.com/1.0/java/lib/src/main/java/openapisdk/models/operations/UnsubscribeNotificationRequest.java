package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeNotificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationSubscription request;
    public UnsubscribeNotificationRequest withRequest(openapisdk.models.shared.NotificationSubscription request) {
        this.request = request;
        return this;
    }
}