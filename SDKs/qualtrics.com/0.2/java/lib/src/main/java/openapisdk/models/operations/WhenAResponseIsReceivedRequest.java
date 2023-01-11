package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WhenAResponseIsReceivedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscribeToEventBody request;
    public WhenAResponseIsReceivedRequest withRequest(openapisdk.models.shared.SubscribeToEventBody request) {
        this.request = request;
        return this;
    }
}