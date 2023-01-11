package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1BudgetAmount
 * The budgeted amount for each usage period.
**/
public class GoogleCloudBillingBudgetsV1BudgetAmount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPeriodAmount")
    public java.util.Map<String, Object> lastPeriodAmount;
    public GoogleCloudBillingBudgetsV1BudgetAmount withLastPeriodAmount(java.util.Map<String, Object> lastPeriodAmount) {
        this.lastPeriodAmount = lastPeriodAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specifiedAmount")
    public GoogleTypeMoney specifiedAmount;
    public GoogleCloudBillingBudgetsV1BudgetAmount withSpecifiedAmount(GoogleTypeMoney specifiedAmount) {
        this.specifiedAmount = specifiedAmount;
        return this;
    }
}