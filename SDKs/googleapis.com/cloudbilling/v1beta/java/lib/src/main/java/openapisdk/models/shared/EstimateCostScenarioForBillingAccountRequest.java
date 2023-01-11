package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimateCostScenarioForBillingAccountRequest
 * Request for EstimateCostScenarioForBillingAccount.
**/
public class EstimateCostScenarioForBillingAccountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costScenario")
    public CostScenario costScenario;
    public EstimateCostScenarioForBillingAccountRequest withCostScenario(CostScenario costScenario) {
        this.costScenario = costScenario;
        return this;
    }
}