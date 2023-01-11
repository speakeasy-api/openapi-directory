package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SellerInput
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
public class SellerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public SellerInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}