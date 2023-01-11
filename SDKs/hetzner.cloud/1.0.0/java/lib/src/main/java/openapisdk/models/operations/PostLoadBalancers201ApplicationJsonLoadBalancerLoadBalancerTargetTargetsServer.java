package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer withId(Long id) {
        this.id = id;
        return this;
    }
}