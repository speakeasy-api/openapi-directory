package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxPublicTokenCreateRequestOptions
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
public class SandboxPublicTokenCreateRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("override_password")
    public String overridePassword;
    public SandboxPublicTokenCreateRequestOptions withOverridePassword(String overridePassword) {
        this.overridePassword = overridePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("override_username")
    public String overrideUsername;
    public SandboxPublicTokenCreateRequestOptions withOverrideUsername(String overrideUsername) {
        this.overrideUsername = overrideUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public SandboxPublicTokenCreateRequestOptionsTransactions transactions;
    public SandboxPublicTokenCreateRequestOptions withTransactions(SandboxPublicTokenCreateRequestOptionsTransactions transactions) {
        this.transactions = transactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public SandboxPublicTokenCreateRequestOptions withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}