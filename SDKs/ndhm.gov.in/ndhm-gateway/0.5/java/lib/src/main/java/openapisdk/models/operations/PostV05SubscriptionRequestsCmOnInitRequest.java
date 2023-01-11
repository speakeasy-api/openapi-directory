package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsCmOnInitRequest {
    public PostV05SubscriptionRequestsCmOnInitHeaders headers;
    public PostV05SubscriptionRequestsCmOnInitRequest withHeaders(PostV05SubscriptionRequestsCmOnInitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuSubscriptionRequestReceipt request;
    public PostV05SubscriptionRequestsCmOnInitRequest withRequest(openapisdk.models.shared.HiuSubscriptionRequestReceipt request) {
        this.request = request;
        return this;
    }
}