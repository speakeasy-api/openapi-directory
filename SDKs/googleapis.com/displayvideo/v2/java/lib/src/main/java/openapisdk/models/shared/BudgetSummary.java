package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BudgetSummary
 * Summarized information of an individual campaign budget.
**/
public class BudgetSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalBudgetId")
    public String externalBudgetId;
    public BudgetSummary withExternalBudgetId(String externalBudgetId) {
        this.externalBudgetId = externalBudgetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preTaxAmountMicros")
    public String preTaxAmountMicros;
    public BudgetSummary withPreTaxAmountMicros(String preTaxAmountMicros) {
        this.preTaxAmountMicros = preTaxAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaCpeCode")
    public PrismaCpeCode prismaCpeCode;
    public BudgetSummary withPrismaCpeCode(PrismaCpeCode prismaCpeCode) {
        this.prismaCpeCode = prismaCpeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmountMicros")
    public String taxAmountMicros;
    public BudgetSummary withTaxAmountMicros(String taxAmountMicros) {
        this.taxAmountMicros = taxAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAmountMicros")
    public String totalAmountMicros;
    public BudgetSummary withTotalAmountMicros(String totalAmountMicros) {
        this.totalAmountMicros = totalAmountMicros;
        return this;
    }
}