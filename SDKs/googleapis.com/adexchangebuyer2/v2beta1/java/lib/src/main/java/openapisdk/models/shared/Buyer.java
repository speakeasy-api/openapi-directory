package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Buyer
 * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
**/
public class Buyer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Buyer withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}