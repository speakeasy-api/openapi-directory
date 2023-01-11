package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetLoadBalancersIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}