package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountList
 * List of accounts with details.
 * 
**/
public class AccountList {
    @JsonProperty("accounts")
    public AccountDetails[] accounts;
    public AccountList withAccounts(AccountDetails[] accounts) {
        this.accounts = accounts;
        return this;
    }
}