package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingFloatingIp
 * The cost of one Floating IP per month
**/
public class GetPricing200ApplicationJsonPricingFloatingIp {
    @JsonProperty("price_monthly")
    public GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly priceMonthly;
    public GetPricing200ApplicationJsonPricingFloatingIp withPriceMonthly(GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}