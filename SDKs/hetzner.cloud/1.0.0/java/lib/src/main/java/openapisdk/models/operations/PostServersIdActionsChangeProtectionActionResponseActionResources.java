package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeProtectionActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeProtectionActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsChangeProtectionActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}