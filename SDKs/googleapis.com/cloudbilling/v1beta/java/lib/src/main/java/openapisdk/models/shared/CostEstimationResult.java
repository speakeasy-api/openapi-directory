package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostEstimationResult
 * The result of a estimating the costs of a `CostScenario`.
**/
public class CostEstimationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public CostEstimationResult withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentCostEstimates")
    public SegmentCostEstimate[] segmentCostEstimates;
    public CostEstimationResult withSegmentCostEstimates(SegmentCostEstimate[] segmentCostEstimates) {
        this.segmentCostEstimates = segmentCostEstimates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skus")
    public Sku[] skus;
    public CostEstimationResult withSkus(Sku[] skus) {
        this.skus = skus;
        return this;
    }
}