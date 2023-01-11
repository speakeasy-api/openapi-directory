package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertionOrderBudgetSegment
 * Settings that control the budget of a single budget segment.
**/
public class InsertionOrderBudgetSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetAmountMicros")
    public String budgetAmountMicros;
    public InsertionOrderBudgetSegment withBudgetAmountMicros(String budgetAmountMicros) {
        this.budgetAmountMicros = budgetAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignBudgetId")
    public String campaignBudgetId;
    public InsertionOrderBudgetSegment withCampaignBudgetId(String campaignBudgetId) {
        this.campaignBudgetId = campaignBudgetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public InsertionOrderBudgetSegment withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InsertionOrderBudgetSegment withDescription(String description) {
        this.description = description;
        return this;
    }
}