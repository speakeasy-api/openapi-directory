package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionsHiuOnNotifyRequest {
    public PostV05SubscriptionsHiuOnNotifyHeaders headers;
    public PostV05SubscriptionsHiuOnNotifyRequest withHeaders(PostV05SubscriptionsHiuOnNotifyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuSubscriptionNotificationAcknowledgment request;
    public PostV05SubscriptionsHiuOnNotifyRequest withRequest(openapisdk.models.shared.HiuSubscriptionNotificationAcknowledgment request) {
        this.request = request;
        return this;
    }
}