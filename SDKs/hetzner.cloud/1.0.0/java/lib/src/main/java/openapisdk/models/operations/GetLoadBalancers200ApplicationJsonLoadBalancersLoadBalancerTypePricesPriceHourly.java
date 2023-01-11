package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}