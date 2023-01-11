package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxIncomeFireWebhookRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxIncomeFireWebhookRequest request;
    public SandboxIncomeFireWebhookRequest withRequest(openapisdk.models.shared.SandboxIncomeFireWebhookRequest request) {
        this.request = request;
        return this;
    }
}