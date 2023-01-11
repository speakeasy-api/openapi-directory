package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceAccountV3 {
    @JsonProperty("currency")
    public String currency;
    public SourceAccountV3 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;
    public SourceAccountV3 withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public SourceAccountV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonProperty("totalPayoutCost")
    public Long totalPayoutCost;
    public SourceAccountV3 withTotalPayoutCost(Long totalPayoutCost) {
        this.totalPayoutCost = totalPayoutCost;
        return this;
    }
}