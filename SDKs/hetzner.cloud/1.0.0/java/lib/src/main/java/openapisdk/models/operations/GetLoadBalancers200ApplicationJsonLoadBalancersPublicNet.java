package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet
 * Public network information
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet {
    @JsonProperty("enabled")
    public Boolean enabled;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("ipv4")
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 ipv4;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet withIpv4(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 ipv6;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet withIpv6(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}