package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxItemFireWebhookRequest
 * SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
**/
public class SandboxItemFireWebhookRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public SandboxItemFireWebhookRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxItemFireWebhookRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxItemFireWebhookRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("webhook_code")
    public SandboxItemFireWebhookRequestWebhookCodeEnum webhookCode;
    public SandboxItemFireWebhookRequest withWebhookCode(SandboxItemFireWebhookRequestWebhookCodeEnum webhookCode) {
        this.webhookCode = webhookCode;
        return this;
    }
}