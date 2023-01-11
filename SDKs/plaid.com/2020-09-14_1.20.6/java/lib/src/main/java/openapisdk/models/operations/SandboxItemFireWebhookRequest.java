package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxItemFireWebhookRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxItemFireWebhookRequest request;
    public SandboxItemFireWebhookRequest withRequest(openapisdk.models.shared.SandboxItemFireWebhookRequest request) {
        this.request = request;
        return this;
    }
}