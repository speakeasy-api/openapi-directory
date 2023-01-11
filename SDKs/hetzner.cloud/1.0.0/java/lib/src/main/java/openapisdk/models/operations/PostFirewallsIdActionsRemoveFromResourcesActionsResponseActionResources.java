package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}