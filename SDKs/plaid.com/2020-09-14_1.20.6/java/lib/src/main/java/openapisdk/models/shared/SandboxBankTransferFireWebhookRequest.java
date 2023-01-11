package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxBankTransferFireWebhookRequest
 * SandboxBankTransferFireWebhookRequest defines the request schema for `/sandbox/bank_transfer/fire_webhook`
**/
public class SandboxBankTransferFireWebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxBankTransferFireWebhookRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxBankTransferFireWebhookRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("webhook")
    public String webhook;
    public SandboxBankTransferFireWebhookRequest withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}