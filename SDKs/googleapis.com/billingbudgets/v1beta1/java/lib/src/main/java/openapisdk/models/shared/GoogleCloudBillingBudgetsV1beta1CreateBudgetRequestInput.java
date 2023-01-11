package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput
 * Request for CreateBudget
**/
public class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public GoogleCloudBillingBudgetsV1beta1BudgetInput budget;
    public GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput withBudget(GoogleCloudBillingBudgetsV1beta1BudgetInput budget) {
        this.budget = budget;
        return this;
    }
}