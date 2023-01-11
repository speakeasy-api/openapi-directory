package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly
 * Hourly costs for a Load Balancer type in this network zone
**/
public class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}