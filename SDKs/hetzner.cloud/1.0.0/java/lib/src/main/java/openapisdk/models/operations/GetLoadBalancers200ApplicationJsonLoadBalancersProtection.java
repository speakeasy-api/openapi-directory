package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersProtection
 * Protection configuration for the Resource
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetLoadBalancers200ApplicationJsonLoadBalancersProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}