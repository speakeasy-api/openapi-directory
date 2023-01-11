package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly
 * Hourly costs for a Resource in this Location
**/
public class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly {
    @JsonProperty("gross")
    public String gross;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    @JsonProperty("net")
    public String net;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly withNet(String net) {
        this.net = net;
        return this;
    }
}