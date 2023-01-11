package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequestTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public IssueTokenRequestTransfer withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public IssueTokenRequestTransfer withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
}