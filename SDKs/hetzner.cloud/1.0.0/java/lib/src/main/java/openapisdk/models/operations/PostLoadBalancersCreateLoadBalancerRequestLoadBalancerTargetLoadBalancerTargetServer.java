package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
 * Server where the traffic should be routed through
**/
public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer withId(Long id) {
        this.id = id;
        return this;
    }
}