package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SandboxOauthSelectAccountsRequest
 * Defines the request schema for `sandbox/oauth/select_accounts`
**/
public class SandboxOauthSelectAccountsRequest {
    @JsonProperty("accounts")
    public String[] accounts;
    public SandboxOauthSelectAccountsRequest withAccounts(String[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonProperty("oauth_state_id")
    public String oauthStateId;
    public SandboxOauthSelectAccountsRequest withOauthStateId(String oauthStateId) {
        this.oauthStateId = oauthStateId;
        return this;
    }
}