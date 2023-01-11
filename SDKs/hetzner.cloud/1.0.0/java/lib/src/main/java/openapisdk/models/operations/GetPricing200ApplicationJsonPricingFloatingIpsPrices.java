package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingFloatingIpsPrices {
    @JsonProperty("location")
    public String location;
    public GetPricing200ApplicationJsonPricingFloatingIpsPrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly priceMonthly;
    public GetPricing200ApplicationJsonPricingFloatingIpsPrices withPriceMonthly(GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}