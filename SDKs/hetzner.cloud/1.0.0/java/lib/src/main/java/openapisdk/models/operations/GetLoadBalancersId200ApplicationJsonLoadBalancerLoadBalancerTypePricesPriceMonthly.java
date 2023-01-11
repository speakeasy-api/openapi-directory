package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}