package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Seller
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
public class Seller {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Seller withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountId")
    public String subAccountId;
    public Seller withSubAccountId(String subAccountId) {
        this.subAccountId = subAccountId;
        return this;
    }
}