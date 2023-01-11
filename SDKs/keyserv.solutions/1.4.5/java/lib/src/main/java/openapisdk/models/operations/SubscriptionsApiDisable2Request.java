package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDisable2Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiDisable2Request withRequest(Object request) {
        this.request = request;
        return this;
    }
}