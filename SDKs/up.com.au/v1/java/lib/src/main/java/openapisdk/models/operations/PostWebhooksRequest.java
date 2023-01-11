package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebhookRequest request;
    public PostWebhooksRequest withRequest(openapisdk.models.shared.CreateWebhookRequest request) {
        this.request = request;
        return this;
    }
}