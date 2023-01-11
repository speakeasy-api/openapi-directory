package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingV2TrunkingNumberOriginatingCallPrice
 * The OriginatingCallPrice record
**/
public class PricingV2TrunkingNumberOriginatingCallPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_price")
    public Double basePrice;
    public PricingV2TrunkingNumberOriginatingCallPrice withBasePrice(Double basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_price")
    public Double currentPrice;
    public PricingV2TrunkingNumberOriginatingCallPrice withCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public PricingV2TrunkingNumberOriginatingCallPrice withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
}