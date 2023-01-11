package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsAttachActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsAttachActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostVolumesIdActionsAttachActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}