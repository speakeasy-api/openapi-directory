package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsEnableRescue201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsEnableRescue201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsEnableRescue201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}