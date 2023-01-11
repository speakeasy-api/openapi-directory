package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly
 * Monthly costs for a Load Balancer type in this network zone
**/
public class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}