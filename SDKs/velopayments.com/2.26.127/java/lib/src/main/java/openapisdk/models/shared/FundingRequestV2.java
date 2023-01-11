package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FundingRequestV2 {
    @JsonProperty("amount")
    public Long amount;
    public FundingRequestV2 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
}