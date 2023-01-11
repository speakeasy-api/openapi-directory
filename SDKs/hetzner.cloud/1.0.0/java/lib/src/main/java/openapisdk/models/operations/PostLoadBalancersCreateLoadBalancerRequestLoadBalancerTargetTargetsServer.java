package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer withId(Long id) {
        this.id = id;
        return this;
    }
}