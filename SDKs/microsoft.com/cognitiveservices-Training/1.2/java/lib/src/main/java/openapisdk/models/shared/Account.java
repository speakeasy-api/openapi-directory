package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Represents a user account
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public Account withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public ApiKeys keys;
    public Account withKeys(ApiKeys keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quotas")
    public AccountQuota quotas;
    public Account withQuotas(AccountQuota quotas) {
        this.quotas = quotas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public Account withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}