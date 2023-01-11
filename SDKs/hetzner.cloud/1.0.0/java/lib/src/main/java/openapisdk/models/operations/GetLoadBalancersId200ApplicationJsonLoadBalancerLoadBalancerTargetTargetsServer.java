package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer withId(Long id) {
        this.id = id;
        return this;
    }
}