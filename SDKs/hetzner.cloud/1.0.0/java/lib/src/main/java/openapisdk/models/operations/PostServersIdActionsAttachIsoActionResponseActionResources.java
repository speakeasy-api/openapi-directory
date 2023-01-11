package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachIsoActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAttachIsoActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsAttachIsoActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}