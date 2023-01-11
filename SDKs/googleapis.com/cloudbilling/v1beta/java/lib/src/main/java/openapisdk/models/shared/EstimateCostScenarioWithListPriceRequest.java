package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimateCostScenarioWithListPriceRequest
 * Request for EstimateCostScenarioWithListPrice.
**/
public class EstimateCostScenarioWithListPriceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costScenario")
    public CostScenario costScenario;
    public EstimateCostScenarioWithListPriceRequest withCostScenario(CostScenario costScenario) {
        this.costScenario = costScenario;
        return this;
    }
}