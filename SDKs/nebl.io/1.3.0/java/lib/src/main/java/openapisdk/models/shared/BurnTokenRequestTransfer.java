package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BurnTokenRequestTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public BurnTokenRequestTransfer withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public BurnTokenRequestTransfer withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public BurnTokenRequestTransfer withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
}