package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices {
    @JsonProperty("location")
    public String location;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly priceHourly;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices withPriceHourly(GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly priceMonthly;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices withPriceMonthly(GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}