package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}