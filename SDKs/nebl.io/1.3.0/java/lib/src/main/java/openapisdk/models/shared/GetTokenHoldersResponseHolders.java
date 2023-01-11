package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenHoldersResponseHolders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetTokenHoldersResponseHolders withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetTokenHoldersResponseHolders withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
}