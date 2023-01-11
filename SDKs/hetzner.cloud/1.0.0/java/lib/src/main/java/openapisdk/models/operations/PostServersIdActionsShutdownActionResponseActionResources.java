package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsShutdownActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsShutdownActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsShutdownActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}