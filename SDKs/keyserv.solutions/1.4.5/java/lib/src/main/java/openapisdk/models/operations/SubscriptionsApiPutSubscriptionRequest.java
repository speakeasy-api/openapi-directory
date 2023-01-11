package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiPutSubscriptionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiPutSubscriptionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}