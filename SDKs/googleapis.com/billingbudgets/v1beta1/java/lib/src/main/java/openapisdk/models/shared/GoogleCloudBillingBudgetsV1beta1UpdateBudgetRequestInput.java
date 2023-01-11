package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput
 * Request for UpdateBudget
**/
public class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public GoogleCloudBillingBudgetsV1beta1BudgetInput budget;
    public GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput withBudget(GoogleCloudBillingBudgetsV1beta1BudgetInput budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}