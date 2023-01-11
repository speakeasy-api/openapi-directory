package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiFindRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiFindRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}