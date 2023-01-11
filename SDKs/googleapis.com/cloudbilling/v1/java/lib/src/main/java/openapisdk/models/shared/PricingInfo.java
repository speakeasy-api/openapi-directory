package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingInfo
 * Represents the pricing information for a SKU at a single point of time.
**/
public class PricingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationInfo")
    public AggregationInfo aggregationInfo;
    public PricingInfo withAggregationInfo(AggregationInfo aggregationInfo) {
        this.aggregationInfo = aggregationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionRate")
    public Double currencyConversionRate;
    public PricingInfo withCurrencyConversionRate(Double currencyConversionRate) {
        this.currencyConversionRate = currencyConversionRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveTime")
    public String effectiveTime;
    public PricingInfo withEffectiveTime(String effectiveTime) {
        this.effectiveTime = effectiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingExpression")
    public PricingExpression pricingExpression;
    public PricingInfo withPricingExpression(PricingExpression pricingExpression) {
        this.pricingExpression = pricingExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public PricingInfo withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}