package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SkuCostEstimate
 * Estimated cost for usage on a SKU.
**/
public class SkuCostEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costEstimate")
    public CostEstimate costEstimate;
    public SkuCostEstimate withCostEstimate(CostEstimate costEstimate) {
        this.costEstimate = costEstimate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public SkuCostEstimate withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageAmount")
    public Double usageAmount;
    public SkuCostEstimate withUsageAmount(Double usageAmount) {
        this.usageAmount = usageAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageUnit")
    public String usageUnit;
    public SkuCostEstimate withUsageUnit(String usageUnit) {
        this.usageUnit = usageUnit;
        return this;
    }
}