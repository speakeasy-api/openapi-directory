package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}