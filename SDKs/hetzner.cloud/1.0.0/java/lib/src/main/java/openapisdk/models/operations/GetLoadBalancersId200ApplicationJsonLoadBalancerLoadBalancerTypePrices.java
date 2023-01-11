package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceHourly(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceMonthly(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}