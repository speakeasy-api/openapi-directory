package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SandboxBankTransferFireWebhookResponse
 * SandboxBankTransferFireWebhookResponse defines the response schema for `/sandbox/bank_transfer/fire_webhook`
**/
public class SandboxBankTransferFireWebhookResponse {
    @JsonProperty("request_id")
    public String requestId;
    public SandboxBankTransferFireWebhookResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}