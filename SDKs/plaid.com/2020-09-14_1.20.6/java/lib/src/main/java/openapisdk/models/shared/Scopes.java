package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scopes
 * The scopes object
**/
public class Scopes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public AccountAccess[] accounts;
    public Scopes withAccounts(AccountAccess[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_accounts")
    public Boolean newAccounts;
    public Scopes withNewAccounts(Boolean newAccounts) {
        this.newAccounts = newAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_access")
    public java.util.Map<String, Object> productAccess;
    public Scopes withProductAccess(java.util.Map<String, Object> productAccess) {
        this.productAccess = productAccess;
        return this;
    }
}