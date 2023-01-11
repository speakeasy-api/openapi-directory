package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly
 * Monthly costs for a Resource in this Location
**/
public class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
}