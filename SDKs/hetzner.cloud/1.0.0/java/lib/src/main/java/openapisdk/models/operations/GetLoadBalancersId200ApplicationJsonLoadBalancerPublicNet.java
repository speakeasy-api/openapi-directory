package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
 * Public network information
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet {
    @JsonProperty("enabled")
    public Boolean enabled;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("ipv4")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 ipv4;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withIpv4(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 ipv6;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withIpv6(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}