package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}