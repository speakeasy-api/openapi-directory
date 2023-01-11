package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetServersIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetServersIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}