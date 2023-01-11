package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetServersIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetServersIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}