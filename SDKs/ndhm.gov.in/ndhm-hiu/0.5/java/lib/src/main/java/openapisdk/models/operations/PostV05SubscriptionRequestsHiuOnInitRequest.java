package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsHiuOnInitRequest {
    public PostV05SubscriptionRequestsHiuOnInitHeaders headers;
    public PostV05SubscriptionRequestsHiuOnInitRequest withHeaders(PostV05SubscriptionRequestsHiuOnInitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuSubscriptionRequestReceipt request;
    public PostV05SubscriptionRequestsHiuOnInitRequest withRequest(openapisdk.models.shared.HiuSubscriptionRequestReceipt request) {
        this.request = request;
        return this;
    }
}