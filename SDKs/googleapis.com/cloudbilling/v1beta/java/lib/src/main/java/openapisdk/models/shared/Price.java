package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Price
 * The price of a SKU at a point int time.
**/
public class Price {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveTime")
    public EstimationTimePoint effectiveTime;
    public Price withEffectiveTime(EstimationTimePoint effectiveTime) {
        this.effectiveTime = effectiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceType")
    public String priceType;
    public Price withPriceType(String priceType) {
        this.priceType = priceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Rate rate;
    public Price withRate(Rate rate) {
        this.rate = rate;
        return this;
    }
}