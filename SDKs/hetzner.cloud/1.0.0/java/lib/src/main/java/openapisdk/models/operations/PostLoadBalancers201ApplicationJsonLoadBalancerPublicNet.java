package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet
 * Public network information
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet {
    @JsonProperty("enabled")
    public Boolean enabled;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("ipv4")
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 ipv4;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet withIpv4(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 ipv6;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet withIpv6(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}