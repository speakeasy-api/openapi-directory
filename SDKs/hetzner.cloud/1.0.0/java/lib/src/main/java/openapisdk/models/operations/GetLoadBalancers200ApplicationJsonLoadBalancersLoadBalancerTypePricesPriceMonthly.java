package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}