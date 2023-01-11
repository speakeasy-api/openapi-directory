package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
 * Server where the traffic should be routed through
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer withId(Long id) {
        this.id = id;
        return this;
    }
}