package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}