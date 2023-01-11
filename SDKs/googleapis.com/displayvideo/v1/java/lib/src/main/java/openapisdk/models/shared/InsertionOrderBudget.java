package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertionOrderBudget
 * Settings that control how insertion order budget is allocated.
**/
public class InsertionOrderBudget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automationType")
    public InsertionOrderBudgetAutomationTypeEnum automationType;
    public InsertionOrderBudget withAutomationType(InsertionOrderBudgetAutomationTypeEnum automationType) {
        this.automationType = automationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetSegments")
    public InsertionOrderBudgetSegment[] budgetSegments;
    public InsertionOrderBudget withBudgetSegments(InsertionOrderBudgetSegment[] budgetSegments) {
        this.budgetSegments = budgetSegments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetUnit")
    public InsertionOrderBudgetBudgetUnitEnum budgetUnit;
    public InsertionOrderBudget withBudgetUnit(InsertionOrderBudgetBudgetUnitEnum budgetUnit) {
        this.budgetUnit = budgetUnit;
        return this;
    }
}