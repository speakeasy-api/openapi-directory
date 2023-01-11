package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}