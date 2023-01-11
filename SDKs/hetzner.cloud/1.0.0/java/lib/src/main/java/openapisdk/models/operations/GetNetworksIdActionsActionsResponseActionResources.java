package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetNetworksIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetNetworksIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}