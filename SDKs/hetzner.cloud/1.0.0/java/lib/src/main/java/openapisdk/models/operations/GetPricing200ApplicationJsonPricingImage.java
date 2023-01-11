package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingImage
 * The cost of Image per GB/month
**/
public class GetPricing200ApplicationJsonPricingImage {
    @JsonProperty("price_per_gb_month")
    public GetPricing200ApplicationJsonPricingImagePricePerGbMonth pricePerGbMonth;
    public GetPricing200ApplicationJsonPricingImage withPricePerGbMonth(GetPricing200ApplicationJsonPricingImagePricePerGbMonth pricePerGbMonth) {
        this.pricePerGbMonth = pricePerGbMonth;
        return this;
    }
}