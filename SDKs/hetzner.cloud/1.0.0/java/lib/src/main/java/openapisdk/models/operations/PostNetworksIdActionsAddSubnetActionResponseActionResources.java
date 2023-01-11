package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddSubnetActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsAddSubnetActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsAddSubnetActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}