package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemWebhookUpdateRequest
 * ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update`
**/
public class ItemWebhookUpdateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemWebhookUpdateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemWebhookUpdateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemWebhookUpdateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("webhook")
    public String webhook;
    public ItemWebhookUpdateRequest withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}