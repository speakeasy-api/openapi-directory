package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly priceHourly;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices withPriceHourly(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly priceMonthly;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices withPriceMonthly(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}