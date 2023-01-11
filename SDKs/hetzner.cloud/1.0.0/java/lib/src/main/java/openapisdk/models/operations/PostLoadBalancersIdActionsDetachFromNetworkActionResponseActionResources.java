package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}