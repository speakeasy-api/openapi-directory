package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}