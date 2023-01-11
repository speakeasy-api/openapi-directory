package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices {
    @JsonProperty("location")
    public String location;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceHourly(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices withPriceMonthly(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}