package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachFromNetworkActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDetachFromNetworkActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsDetachFromNetworkActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}