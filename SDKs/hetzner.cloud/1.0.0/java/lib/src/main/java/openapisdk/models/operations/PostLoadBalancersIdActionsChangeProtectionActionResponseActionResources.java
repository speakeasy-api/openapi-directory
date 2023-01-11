package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}