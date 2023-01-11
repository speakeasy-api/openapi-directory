package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingVolume
 * The cost of Volume per GB/month
**/
public class GetPricing200ApplicationJsonPricingVolume {
    @JsonProperty("price_per_gb_month")
    public GetPricing200ApplicationJsonPricingVolumePricePerGbMonth pricePerGbMonth;
    public GetPricing200ApplicationJsonPricingVolume withPricePerGbMonth(GetPricing200ApplicationJsonPricingVolumePricePerGbMonth pricePerGbMonth) {
        this.pricePerGbMonth = pricePerGbMonth;
        return this;
    }
}