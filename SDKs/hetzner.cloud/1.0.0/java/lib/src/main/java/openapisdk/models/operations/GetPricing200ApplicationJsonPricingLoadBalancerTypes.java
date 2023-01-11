package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingLoadBalancerTypes {
    @JsonProperty("id")
    public Double id;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypes withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices[] prices;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypes withPrices(GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices[] prices) {
        this.prices = prices;
        return this;
    }
}