package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachIsoActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDetachIsoActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsDetachIsoActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}