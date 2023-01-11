package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingSubscribeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public PostBillingSubscribeRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
}