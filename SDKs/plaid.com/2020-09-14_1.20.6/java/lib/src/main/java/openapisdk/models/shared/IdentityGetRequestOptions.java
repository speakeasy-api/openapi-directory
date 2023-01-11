package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityGetRequestOptions
 * An optional object to filter `/identity/get` results.
**/
public class IdentityGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ids")
    public String[] accountIds;
    public IdentityGetRequestOptions withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}