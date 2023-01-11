package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHeldAccountsResponse
 * Returns a list of the accounts covered by a hold.
**/
public class ListHeldAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public HeldAccount[] accounts;
    public ListHeldAccountsResponse withAccounts(HeldAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
}