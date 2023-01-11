package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}