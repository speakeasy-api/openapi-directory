package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookVerificationKeyGetRequest
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
**/
public class WebhookVerificationKeyGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public WebhookVerificationKeyGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("key_id")
    public String keyId;
    public WebhookVerificationKeyGetRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public WebhookVerificationKeyGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}