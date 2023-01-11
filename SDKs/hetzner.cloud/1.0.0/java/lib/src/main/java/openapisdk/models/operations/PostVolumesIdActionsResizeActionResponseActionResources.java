package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsResizeActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsResizeActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostVolumesIdActionsResizeActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}