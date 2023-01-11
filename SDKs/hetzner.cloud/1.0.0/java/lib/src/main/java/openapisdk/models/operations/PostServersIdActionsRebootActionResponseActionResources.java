package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebootActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRebootActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsRebootActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}