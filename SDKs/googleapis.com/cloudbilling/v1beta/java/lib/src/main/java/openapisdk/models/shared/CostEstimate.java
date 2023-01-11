package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostEstimate
 * An estimated cost.
**/
public class CostEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditEstimates")
    public CreditEstimate[] creditEstimates;
    public CostEstimate withCreditEstimates(CreditEstimate[] creditEstimates) {
        this.creditEstimates = creditEstimates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netCostEstimate")
    public Money netCostEstimate;
    public CostEstimate withNetCostEstimate(Money netCostEstimate) {
        this.netCostEstimate = netCostEstimate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preCreditCostEstimate")
    public Money preCreditCostEstimate;
    public CostEstimate withPreCreditCostEstimate(Money preCreditCostEstimate) {
        this.preCreditCostEstimate = preCreditCostEstimate;
        return this;
    }
}