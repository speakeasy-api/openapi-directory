package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteSubnetActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsDeleteSubnetActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsDeleteSubnetActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}