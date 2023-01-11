package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiSaveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiSaveRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}