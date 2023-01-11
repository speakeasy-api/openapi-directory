package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
 * Server where the traffic should be routed through
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer withId(Long id) {
        this.id = id;
        return this;
    }
}