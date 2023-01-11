package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}