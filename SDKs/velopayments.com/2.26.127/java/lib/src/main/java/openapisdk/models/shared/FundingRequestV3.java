package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FundingRequestV3 {
    @JsonProperty("amount")
    public Long amount;
    public FundingRequestV3 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("fundingAccountId")
    public String fundingAccountId;
    public FundingRequestV3 withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
}