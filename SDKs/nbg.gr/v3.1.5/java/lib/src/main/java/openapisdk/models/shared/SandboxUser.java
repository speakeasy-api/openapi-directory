package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxUser
 * User data
**/
public class SandboxUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public SandboxBankAccount[] accounts;
    public SandboxUser withAccounts(SandboxBankAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cards")
    public SandboxCard[] cards;
    public SandboxUser withCards(SandboxCard[] cards) {
        this.cards = cards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryCacheEntries")
    public SandboxRetryCacheEntry[] retryCacheEntries;
    public SandboxUser withRetryCacheEntries(SandboxRetryCacheEntry[] retryCacheEntries) {
        this.retryCacheEntries = retryCacheEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public SandboxUser withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}