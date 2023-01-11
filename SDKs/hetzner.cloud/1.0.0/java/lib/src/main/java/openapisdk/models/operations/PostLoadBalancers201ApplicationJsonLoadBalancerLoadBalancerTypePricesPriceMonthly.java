package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}