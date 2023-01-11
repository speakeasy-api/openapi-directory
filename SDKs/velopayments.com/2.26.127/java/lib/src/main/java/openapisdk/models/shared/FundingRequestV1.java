package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FundingRequestV1 {
    @JsonProperty("amount")
    public Long amount;
    public FundingRequestV1 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
}