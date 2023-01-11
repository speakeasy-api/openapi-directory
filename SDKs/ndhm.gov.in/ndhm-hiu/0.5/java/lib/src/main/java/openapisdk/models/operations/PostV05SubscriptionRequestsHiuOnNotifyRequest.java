package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsHiuOnNotifyRequest {
    public PostV05SubscriptionRequestsHiuOnNotifyHeaders headers;
    public PostV05SubscriptionRequestsHiuOnNotifyRequest withHeaders(PostV05SubscriptionRequestsHiuOnNotifyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuSubscriptionRequestNotificationAcknowledgement request;
    public PostV05SubscriptionRequestsHiuOnNotifyRequest withRequest(openapisdk.models.shared.HiuSubscriptionRequestNotificationAcknowledgement request) {
        this.request = request;
        return this;
    }
}