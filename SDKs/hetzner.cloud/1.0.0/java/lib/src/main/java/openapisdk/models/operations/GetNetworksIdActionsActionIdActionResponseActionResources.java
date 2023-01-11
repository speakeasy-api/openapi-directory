package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetNetworksIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetNetworksIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}