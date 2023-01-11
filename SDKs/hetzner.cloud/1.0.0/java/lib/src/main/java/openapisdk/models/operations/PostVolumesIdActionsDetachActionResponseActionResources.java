package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsDetachActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsDetachActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostVolumesIdActionsDetachActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}