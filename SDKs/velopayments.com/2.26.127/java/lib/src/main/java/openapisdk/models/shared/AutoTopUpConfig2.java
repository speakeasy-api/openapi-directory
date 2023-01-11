package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutoTopUpConfig2 {
    @JsonProperty("enabled")
    public Boolean enabled;
    public AutoTopUpConfig2 withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountId")
    public String fundingAccountId;
    public AutoTopUpConfig2 withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBalance")
    public Long minBalance;
    public AutoTopUpConfig2 withMinBalance(Long minBalance) {
        this.minBalance = minBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBalance")
    public Long targetBalance;
    public AutoTopUpConfig2 withTargetBalance(Long targetBalance) {
        this.targetBalance = targetBalance;
        return this;
    }
}