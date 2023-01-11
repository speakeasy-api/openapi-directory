package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemBudgetInput
 * Settings that control how budget is allocated.
**/
public class LineItemBudgetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetAllocationType")
    public LineItemBudgetBudgetAllocationTypeEnum budgetAllocationType;
    public LineItemBudgetInput withBudgetAllocationType(LineItemBudgetBudgetAllocationTypeEnum budgetAllocationType) {
        this.budgetAllocationType = budgetAllocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAmount")
    public String maxAmount;
    public LineItemBudgetInput withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
}