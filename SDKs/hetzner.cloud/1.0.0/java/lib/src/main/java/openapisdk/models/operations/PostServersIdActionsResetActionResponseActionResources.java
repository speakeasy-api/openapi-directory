package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsResetActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsResetActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsResetActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}