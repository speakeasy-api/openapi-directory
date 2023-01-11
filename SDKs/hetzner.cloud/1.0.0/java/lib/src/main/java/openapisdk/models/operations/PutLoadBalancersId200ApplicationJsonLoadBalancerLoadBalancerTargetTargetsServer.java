package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer {
    @JsonProperty("id")
    public Long id;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer withId(Long id) {
        this.id = id;
        return this;
    }
}