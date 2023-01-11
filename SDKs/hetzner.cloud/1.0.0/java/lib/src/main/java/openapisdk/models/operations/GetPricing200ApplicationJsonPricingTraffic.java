package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingTraffic
 * The cost of additional traffic per TB
**/
public class GetPricing200ApplicationJsonPricingTraffic {
    @JsonProperty("price_per_tb")
    public GetPricing200ApplicationJsonPricingTrafficPricePerTb pricePerTb;
    public GetPricing200ApplicationJsonPricingTraffic withPricePerTb(GetPricing200ApplicationJsonPricingTrafficPricePerTb pricePerTb) {
        this.pricePerTb = pricePerTb;
        return this;
    }
}