package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRequestConsole201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRequestConsole201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsRequestConsole201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}