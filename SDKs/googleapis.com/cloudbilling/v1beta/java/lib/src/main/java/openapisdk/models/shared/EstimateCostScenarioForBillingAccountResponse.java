package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimateCostScenarioForBillingAccountResponse
 * Response for EstimateCostScenarioForBillingAccount
**/
public class EstimateCostScenarioForBillingAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costEstimationResult")
    public CostEstimationResult costEstimationResult;
    public EstimateCostScenarioForBillingAccountResponse withCostEstimationResult(CostEstimationResult costEstimationResult) {
        this.costEstimationResult = costEstimationResult;
        return this;
    }
}