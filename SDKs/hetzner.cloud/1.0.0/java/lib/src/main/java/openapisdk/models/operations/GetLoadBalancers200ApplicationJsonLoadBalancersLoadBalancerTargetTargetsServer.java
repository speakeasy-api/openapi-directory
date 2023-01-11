package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer withId(Long id) {
        this.id = id;
        return this;
    }
}