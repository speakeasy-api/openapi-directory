package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableRescueActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDisableRescueActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsDisableRescueActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}