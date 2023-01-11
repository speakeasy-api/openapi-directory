package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsChangeProtectionActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsChangeProtectionActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostVolumesIdActionsChangeProtectionActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}