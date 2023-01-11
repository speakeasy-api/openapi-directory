package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices {
    @JsonProperty("location")
    public String location;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly priceHourly;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices withPriceHourly(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly priceMonthly;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices withPriceMonthly(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}