package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerProtection
 * Protection configuration for the Resource
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}