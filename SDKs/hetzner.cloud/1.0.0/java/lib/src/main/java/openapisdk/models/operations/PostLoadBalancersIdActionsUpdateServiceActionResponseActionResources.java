package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}