package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSubscriptionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public AddSubscriptionRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
}