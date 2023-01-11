package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitmentCostEstimate
 * Estimated cost for a commitment.
**/
public class CommitmentCostEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentTotalCostEstimate")
    public CostEstimate commitmentTotalCostEstimate;
    public CommitmentCostEstimate withCommitmentTotalCostEstimate(CostEstimate commitmentTotalCostEstimate) {
        this.commitmentTotalCostEstimate = commitmentTotalCostEstimate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CommitmentCostEstimate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuCostEstimates")
    public SkuCostEstimate[] skuCostEstimates;
    public CommitmentCostEstimate withSkuCostEstimates(SkuCostEstimate[] skuCostEstimates) {
        this.skuCostEstimates = skuCostEstimates;
        return this;
    }
}