package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachToNetworkActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAttachToNetworkActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsAttachToNetworkActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}