package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveHeldAccountsRequest
 * Remove a list of accounts from a hold.
**/
public class RemoveHeldAccountsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public RemoveHeldAccountsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}