package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices {
    @JsonProperty("location")
    public String location;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceHourly(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceMonthly(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}