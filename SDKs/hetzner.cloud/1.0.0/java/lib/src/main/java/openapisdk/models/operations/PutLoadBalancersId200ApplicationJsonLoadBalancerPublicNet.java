package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
 * Public network information
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet {
    @JsonProperty("enabled")
    public Boolean enabled;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("ipv4")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 ipv4;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withIpv4(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 ipv6;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet withIpv6(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}