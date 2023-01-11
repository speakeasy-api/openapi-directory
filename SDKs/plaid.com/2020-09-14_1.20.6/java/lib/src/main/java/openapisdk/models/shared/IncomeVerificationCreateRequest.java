package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncomeVerificationCreateRequest
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
**/
public class IncomeVerificationCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public IncomeVerificationCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IncomeVerificationCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("webhook")
    public String webhook;
    public IncomeVerificationCreateRequest withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}