package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingEstimateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public PostBillingEstimateRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
}