package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddHeldAccountsRequest
 * Add a list of accounts to a hold.
**/
public class AddHeldAccountsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public AddHeldAccountsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public AddHeldAccountsRequest withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
}