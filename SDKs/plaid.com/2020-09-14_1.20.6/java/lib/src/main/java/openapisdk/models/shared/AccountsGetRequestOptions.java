package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsGetRequestOptions
 * An optional object to filter `/accounts/get` results.
**/
public class AccountsGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ids")
    public String[] accountIds;
    public AccountsGetRequestOptions withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}