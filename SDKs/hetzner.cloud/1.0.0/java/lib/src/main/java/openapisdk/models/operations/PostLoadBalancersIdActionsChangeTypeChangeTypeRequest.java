package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeTypeChangeTypeRequest {
    @JsonProperty("load_balancer_type")
    public String loadBalancerType;
    public PostLoadBalancersIdActionsChangeTypeChangeTypeRequest withLoadBalancerType(String loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
}