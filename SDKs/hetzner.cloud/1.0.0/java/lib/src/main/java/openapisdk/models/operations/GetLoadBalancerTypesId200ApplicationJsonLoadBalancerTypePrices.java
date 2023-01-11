package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly priceHourly;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices withPriceHourly(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly priceMonthly;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices withPriceMonthly(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}