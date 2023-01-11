package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
 * Server where the traffic should be routed through
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer withId(Long id) {
        this.id = id;
        return this;
    }
}