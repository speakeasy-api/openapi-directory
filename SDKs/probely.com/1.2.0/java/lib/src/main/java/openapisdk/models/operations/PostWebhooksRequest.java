package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookInput request;
    public PostWebhooksRequest withRequest(openapisdk.models.shared.WebhookInput request) {
        this.request = request;
        return this;
    }
}