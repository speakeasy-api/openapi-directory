package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemBudget
 * Settings that control how budget is allocated.
**/
public class LineItemBudget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetAllocationType")
    public LineItemBudgetBudgetAllocationTypeEnum budgetAllocationType;
    public LineItemBudget withBudgetAllocationType(LineItemBudgetBudgetAllocationTypeEnum budgetAllocationType) {
        this.budgetAllocationType = budgetAllocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetUnit")
    public LineItemBudgetBudgetUnitEnum budgetUnit;
    public LineItemBudget withBudgetUnit(LineItemBudgetBudgetUnitEnum budgetUnit) {
        this.budgetUnit = budgetUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAmount")
    public String maxAmount;
    public LineItemBudget withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
}