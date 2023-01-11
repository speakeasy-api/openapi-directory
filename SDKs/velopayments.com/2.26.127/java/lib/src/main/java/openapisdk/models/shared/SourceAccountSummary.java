package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceAccountSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public PaymentAuditCurrencyEnum currency;
    public SourceAccountSummary withCurrency(PaymentAuditCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;
    public SourceAccountSummary withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    @JsonProperty("totalCost")
    public Long totalCost;
    public SourceAccountSummary withTotalCost(Long totalCost) {
        this.totalCost = totalCost;
        return this;
    }
}