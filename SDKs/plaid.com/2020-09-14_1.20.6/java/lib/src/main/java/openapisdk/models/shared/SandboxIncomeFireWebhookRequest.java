package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxIncomeFireWebhookRequest
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
**/
public class SandboxIncomeFireWebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxIncomeFireWebhookRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public SandboxIncomeFireWebhookRequest withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxIncomeFireWebhookRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("verification_status")
    public SandboxIncomeFireWebhookRequestVerificationStatusEnum verificationStatus;
    public SandboxIncomeFireWebhookRequest withVerificationStatus(SandboxIncomeFireWebhookRequestVerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
    @JsonProperty("webhook")
    public String webhook;
    public SandboxIncomeFireWebhookRequest withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}