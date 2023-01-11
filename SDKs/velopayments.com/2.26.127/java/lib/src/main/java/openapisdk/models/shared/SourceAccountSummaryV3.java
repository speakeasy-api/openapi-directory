package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceAccountSummaryV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public PaymentAuditCurrencyV3Enum currency;
    public SourceAccountSummaryV3 withCurrency(PaymentAuditCurrencyV3Enum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;
    public SourceAccountSummaryV3 withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    @JsonProperty("totalCost")
    public Long totalCost;
    public SourceAccountSummaryV3 withTotalCost(Long totalCost) {
        this.totalCost = totalCost;
        return this;
    }
}