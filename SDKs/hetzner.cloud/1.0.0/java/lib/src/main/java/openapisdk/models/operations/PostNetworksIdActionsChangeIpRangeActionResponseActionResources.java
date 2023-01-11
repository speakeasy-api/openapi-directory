package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeIpRangeActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsChangeIpRangeActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsChangeIpRangeActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}