package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}