package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDisableRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiDisableRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}