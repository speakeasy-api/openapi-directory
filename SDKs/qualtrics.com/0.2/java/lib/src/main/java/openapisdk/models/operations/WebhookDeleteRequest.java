package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhookDeleteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscribeToEventBody request;
    public WebhookDeleteRequest withRequest(openapisdk.models.shared.SubscribeToEventBody request) {
        this.request = request;
        return this;
    }
}