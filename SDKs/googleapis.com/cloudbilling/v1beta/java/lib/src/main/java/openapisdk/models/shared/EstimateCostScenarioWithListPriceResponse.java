package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimateCostScenarioWithListPriceResponse
 * Response for EstimateCostScenarioWithListPrice
**/
public class EstimateCostScenarioWithListPriceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costEstimationResult")
    public CostEstimationResult costEstimationResult;
    public EstimateCostScenarioWithListPriceResponse withCostEstimationResult(CostEstimationResult costEstimationResult) {
        this.costEstimationResult = costEstimationResult;
        return this;
    }
}