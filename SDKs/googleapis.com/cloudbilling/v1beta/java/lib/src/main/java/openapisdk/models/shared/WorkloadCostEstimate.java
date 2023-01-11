package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadCostEstimate
 * Estimated cost for a workload.
**/
public class WorkloadCostEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkloadCostEstimate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuCostEstimates")
    public SkuCostEstimate[] skuCostEstimates;
    public WorkloadCostEstimate withSkuCostEstimates(SkuCostEstimate[] skuCostEstimates) {
        this.skuCostEstimates = skuCostEstimates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadTotalCostEstimate")
    public CostEstimate workloadTotalCostEstimate;
    public WorkloadCostEstimate withWorkloadTotalCostEstimate(CostEstimate workloadTotalCostEstimate) {
        this.workloadTotalCostEstimate = workloadTotalCostEstimate;
        return this;
    }
}