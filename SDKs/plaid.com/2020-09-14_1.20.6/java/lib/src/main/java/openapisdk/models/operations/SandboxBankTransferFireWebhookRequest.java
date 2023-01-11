package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxBankTransferFireWebhookRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxBankTransferFireWebhookRequest request;
    public SandboxBankTransferFireWebhookRequest withRequest(openapisdk.models.shared.SandboxBankTransferFireWebhookRequest request) {
        this.request = request;
        return this;
    }
}